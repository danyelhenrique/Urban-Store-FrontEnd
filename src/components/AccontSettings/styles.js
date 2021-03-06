import styled from 'styled-components';
import { Form as Fr } from '@rocketseat/unform';

export const Section = styled.section`
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const Form = styled(Fr)`
  width: 50%;
  background-color: #e74c3c;
  padding: 20px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    width: 80%;
    margin: 10px auto;
  }

  label {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 0.9rem;
    line-height: calc(1rem * 1.5);
    justify-content: center;
    width: 100%;

    input {
      height: 100%;
      height: 30px;
      width: 50%;
      border: none;
      background: none;
      outline: none;
      border-bottom: 1px solid #000;

      ::placeholder {
        color: #fff;
        text-transform: uppercase;
      }
    }
  }

  h4 {
    font-size: 1.2rem;
    line-height: calc(1.2rem * 1.5);
    color: rgb(23, 22, 22);
  }
`;
export const AvatarPreview = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    margin: 0 auto;
  }

  img {
    max-height: 300px;
    max-width: 300px;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    border: 5px double#e74c3c;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  max-height: 100px;

  width: 100%;

  > div {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  border-bottom: 1px solid #000;
  margin: 10px 0;
`;

export const Name = styled.div`
  height: 100%;
  max-height: 100px;

  width: 100%;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;
  margin: 10px 0;
`;

export const Email = styled.div`
  height: 100%;
  max-height: 100px;

  width: 100%;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;
  margin: 10px 0;
`;
export const Password = styled.div`
  height: 100%;
  max-height: 200px;

  width: 100%;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;
  margin: 10px 0;
`;

export const Btn = styled.button`
  width: 50%;
  background: #010101;
  padding: 0px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  color: #fefefe;
  font-size: 1rem;
  height: 186px;
  text-align: center;
  cursor: pointer;
`;
