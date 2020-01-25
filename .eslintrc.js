module.exports = {
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  plugins: [
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "eslint:recommended", "plugin:inferno/recommended", "plugin:prettier/recommended"
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  "settings": {
    "inferno": {
      "createClass": "createClass",
      "pragma": "Inferno"
    },
    "propWrapperFunctions": [
      "forbidExtraProps",
      {
        "property": "freeze",
        "object": "Object"
      },
      {
        "property": "myFavoriteWrapper"
      }
    ],
    "linkComponents": ["Hyperlink",
      {
        "name": "Link",
        "linkAttribute": "to"
      }
    ]
  }
};