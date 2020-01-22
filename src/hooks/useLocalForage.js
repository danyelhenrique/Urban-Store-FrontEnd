import React, { useState, useEffect } from 'react';

export default function useLocalForage(name, Instace) {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [anothers, setAnothers] = useState([]);

  if (!name) {
    return onErro('Plase provider the name.', true);
  }

  if (!Instace) {
    return onErro('Plase provider the Instace.', true);
  }

  async function getKyes() {
    try {
      const localKeys = await Instace.keys();
      setKeys(localKeys);
      return localKeys;
    } catch (error) {
      return onErro('Erro to get keys from db.');
    }
  }

  function onErro(errMsg, throwErr = false) {
    if (throwErr) {
      throw new Error(errMsg);
    }
    console.warn(errMsg);
  }

  async function mapKeys(key) {
    const data = await Instace.getItem(key);
    const requestedData = key === name;

    if (requestedData) setData(data);

    setAnothers(data);
  }

  function getItem(keysArr) {
    keysArr.map(mapKeys);
  }

  async function main() {
    const localKeys = await getKyes();
    getItem(localKeys);
  }

  useEffect(() => {
    main();
  }, []);

  return [data, anothers];
}
