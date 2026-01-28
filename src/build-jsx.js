#!/usr/bin/env node

/**
 * Simple JSX to JS compiler for browser use
 *
 * Usage:
 *   node build-jsx.js input.jsx              → outputs input.js
 *   node build-jsx.js input.jsx output.js    → outputs to specific file
 *   node build-jsx.js *.jsx                  → compiles all jsx files
 */

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

// Process arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node build-jsx.js <input.jsx> [output.js]');
  console.log('       node build-jsx.js *.jsx');
  process.exit(1);
}

// Compile a single file
function compileFile(inputPath, outputPath) {
  let code = fs.readFileSync(inputPath, 'utf8');

  // Transform JSX to JS
  const result = babel.transformSync(code, {
    presets: ['@babel/preset-react'],
    filename: inputPath,
  });

  let output = result.code;

  // Convert ES module syntax to browser-compatible globals
  // Replace: import { X, Y } from 'lucide-react' → const { X, Y } = lucideReact
  output = output.replace(
    /import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/g,
    'const {$1} = lucideReact'
  );

  // Replace: import { X } from 'react' → const { X } = React
  output = output.replace(
    /import\s*\{([^}]+)\}\s*from\s*['"]react['"]/g,
    'const {$1} = React'
  );

  // Replace: import React from 'react' → (remove, React is global)
  output = output.replace(/import\s+React\s+from\s+['"]react['"];?\n?/g, '');

  // Replace: import React, { X } from 'react' → const { X } = React
  output = output.replace(
    /import\s+React\s*,\s*\{([^}]+)\}\s*from\s*['"]react['"];?\n?/g,
    'const {$1} = React;'
  );

  // Replace: export default X → window.X = X (for named functions)
  output = output.replace(
    /export\s+default\s+function\s+(\w+)/g,
    'window.$1 = function $1'
  );

  // Replace: export default X → window.App = X (for anonymous or variable exports)
  output = output.replace(
    /export\s+default\s+(\w+);?/g,
    'window.$1 = $1;'
  );

  fs.writeFileSync(outputPath, output);
  console.log(`✓ ${inputPath} → ${outputPath}`);
}

// Handle multiple files or single file
if (args.length === 1) {
  const input = args[0];
  const output = input.replace(/\.jsx$/, '.js');
  compileFile(input, output);
} else if (args.length === 2 && !args[1].endsWith('.jsx')) {
  compileFile(args[0], args[1]);
} else {
  args.forEach(input => {
    if (input.endsWith('.jsx')) {
      const output = input.replace(/\.jsx$/, '.js');
      compileFile(input, output);
    }
  });
}

console.log('\nDone!');
