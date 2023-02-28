# acorn-proposal-set
support tc39 proposals for acorn

## Usage
Require this module as an Acorn plugin just like the following code:

```js
import { Parser } from 'acorn';
import acornPluginProposals from 'acorn-proposal-set';

const MyParser = Parser.extend(acornPluginProposals({
  proposals: [
    // should use the tc39 proposal name
    'import-assertions',
    'export-default-from',
  ],
}));

MyParser.parse(/* code */, { /* configuration*/ });
```

## Notice

Currently only support Two tc39 proposals:

* [import-assertions](https://github.com/tc39/proposal-export-default-from)
* [export-default-from](https://github.com/tc39/proposal-export-default-from)

More proposals support is coming;

## License
This repo is release under an MIT License
