const path = require(`path`);

const aliases = (prefix = `src`) => ({
  '@': `${prefix}/`,
  '@common': `${prefix}/common`,
  '@components': `${prefix}/components`,
  '@pages': `${prefix}/pages`,
  '@routes': `${prefix}/routes`,
});

const SRC = `./src`;

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases(SRC)).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
};
