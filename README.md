# `@brabeji/styled-compose`

Similar to [https://github.com/diegohaz/reuse](https://github.com/diegohaz/reuse) but aware of styled-components@4 component extension mechanism.

## Installation

    $ yarn add brabeji/styled-compose#0.0.1

## Usage

```javascript

import styled from 'styled-components';
import styledMap from 'styled-map';
import compose from '@brabeji/styled-compose';

// ButtonColors
const buttonBackground = styledMap`
	default: #ccc;
	primary: blue;
	secondary: green;
	tertiary: yellow;
`;
const ButtonColors = styled.div`
	background: ${buttonBackground};
`;

// Box
const boxSize = styledMap`
	default: 100%;
	small: 70%;
	large: 130%;
`;
const boxPadding = styledMap`
	default: 15px 30px;
	small: 10px 20px;
	large: 20px 23px;
`;
const Box = styled.div`
	font-size: ${boxSize};
	padding: ${boxPadding};
`;

// Rounding
const Rounding = styled.div`
	border-radius: 5px;
`;
// ------------------------------------

// Reset
const Reset = styled.div`
	background: none;
	border: none;
	margin: 0;
	padding: 0;
`;

// actual Button
const Button = compose(
	'button',
	Reset,
	Rounding,
	ButtonColors,
	Box,
);

<Button>Click me</Button>
<Button primary small>Click me</Button>
<Button secondary large>Click me</Button>
<Button tertiary as="span">Click me</Button>

```
