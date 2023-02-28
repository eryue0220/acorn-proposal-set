import importAssertionPlugin from 'acorn-import-assertion-v2';
import exportDefaultFromPlugin from 'acorn-export-default-from';

const defaultProposals = {
  'import-assertions': importAssertionPlugin,
  'export-default-from': exportDefaultFromPlugin,
};

function loadProposals(proposals = []) {
  if (proposals.length === 0) return defaultProposals;

  const supported = [];

  proposals.forEach(proposal => {
    if (defaultProposals[proposal]) {
      supported.push(defaultProposals[proposal]);
    }
  });

  return supported;
}

export default function acornPluginProposalSets(config = {}) {
  const { proposals } = config ?? {};
  const plugins = loadProposals(proposals || []);

  return function (Parser) {
    const extendedParser = Parser.extends(...plugins);
    return extendedParser;
  };
}
