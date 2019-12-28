import React from 'react';

import { Button } from './styles';

export default function ColorSelect({ color }) {
	return <Button type="button" color={color} />;
}
