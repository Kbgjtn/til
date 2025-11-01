---
title: "Vim Surround ✨"
date: "2024-01-03"
description: "Say goodbye to repetitive typing and hello to vim-surround, the ultimate tool for efficient text manipulation in Vim! ✨"
cover: "/images/49d9d1ecd728713e.jpg"
---

<TOC
items={[
"Installation",
"Create Surround",
"Change Surround",
"Delete Surround",
"Visual Mode", "Function",
]} />

## Installation

- Packer

  ```lua
   use("tpope/vim-surround")
  ```

- Lazy
  ```lua
  "tpope/vim-surround"
  ```
- Plug
  ```vim
  Plug "tpope/vim-surround"
  ```

You can check the document details here:
**[vim-surround](https://github.com/tpope/vim-surround "vim-surround")**

## Create Surround

- `ysiw"` surround the word with `" … "`\
   e.g:
  `hello_world` → `"hello_world"`
  <GIF src="/images/ysiw1.gif" alt='ysiw"' />
  <br />

- `ysiw'` surround the word with `' … '`\
   e.g:
  `hello_world` → `'hello_world'`
  <GIF src="/images/ysiw2.gif" alt="ysiw'" alt="ysiw'" />
  <br />

- `ysiw<em>` surround the word with `'<em> … </em>'`\
   e.g:
  `hello_world` → `<em>hello_world</em>`
  <GIF src="/images/ysiwtag.gif" alt="ysiwtag" alt="ysiwtag" />
  <br />

- `ysiw)` surround the word with `'( … )'`\
   e.g:
  `hello_world` → `(hello_world)`
  <GIF src="/images/ysiw).gif" alt="ysiw)" />
  <br />

- `ysiw]` surround the word with `'[ … ]'`\
   e.g:
  `hello_world` → `[hello_world]`
  <GIF src="/images/ysiw].gif" alt="ysiw]" />
  <br />

> note: this only applies to one word, if you want to surround more than one
> word, you can check the **[visual mode](#visual-mode)** below.

## Change Surround

- `cs"'` change `" … "` to `' … '`\
   e.g:
  `"hello_world"` → `'hello_world'`
  <GIF src="/images/cs1.gif" alt="cs1" />
  <br />

- `cs"<em>` change `" … "` to `'<em> … </em>'`\
   e.g:
  `"hello_world"` → `<em>hello_world</em>`
  <GIF src="/images/cs2.gif" alt="cs2" />
  <br />

- `cst)` change `'<em>  … </em>'` to `'( … )'`\
   e.g:
  `'<em>hello_world</em>'` → `(hello_world)`
  <GIF src="/images/cs3.gif" alt="cs3" />
  <br />

- `cs)"` change `'( … )'` to `" … "`\
   e.g:
  `(hello_world)` → `"hello_world"`
  <GIF src="/images/cs4.gif" alt="cs4" />
  <br />

- `cs)]` change `'( … )'` to `'[ … ]'`\
   e.g:
  `'(hello_world)'` → `'[hello_world]'`
  <GIF src="/images/cs5.gif" alt="cs5" />
  <br />

## Delete Surround

- `ds"` delete sorround `" … "`\
   e.g:
  `"hello_world"` → `hello_world`
  <GIF src="/images/ds1.gif" alt="cs1" />
  <br />

- `dst` delete sorround (html tag) `'<em> … </em>'`\
   e.g:
  `'<em>hello_world</em>'` → `hello_world`
  <GIF src="/images/ds2.gif" alt="cs2" />
  <br />

- `ds)` delete sorround `'( … )'`\
   e.g:
  `'(hello_world)'` → `hello_world`
  <GIF src="/images/ds3.gif" alt="cs3" />
  <br />

- `ds)[` delete `'[ … ]'`\
   e.g:
  `'[hello_world]'` → `hello_world`
  <GIF src="/images/ds4.gif" alt="cs4" />
  <br />

## Visual Mode

> note: you can use any `v` motion you want, i use `v(n)e`

- `S"` surround in visual cursor selection with `" … "`\
   e.g:
  `hello world` → `"hello world"`
  <GIF src="/images/vS1.gif" alt="vS1" />
  <br />

- `Stem>` surround visual cursor selection with `'<em> … </em>'`\
   e.g:
  `hello world` → `'<em>hello world</em>'`
  <GIF src="/images/vS2.gif" alt="vS2" />
  <br />

- `S)` surround visual cursor selection with `'( … )'`\
   e.g:
  `hello world` → `(hello world)`
  <GIF src="/images/vS3.gif" alt="vS3" />
  <br />

- `S]` surround visual cursor selection with `'[ … ]'`\
   e.g:
  `hello world` → `[hello world]`
  <GIF src="/images/vS4.gif" alt="vS4" />
  <br />

## Function

- `ysWfprint<CR>` surround the word with any function `print()`\
   e.g:
  hello_world → fmt.Printf(hello_world)
  <GIF src="/images/ysWf.gif" alt="ysWf" />
  <br />

- `ysWFprint<CR>` surround the anything with function and space arround `print()`\
   e.g:
  hello_world → fmt.Println( hello_world )
  <GIF src="/images/ysWF.gif" alt="ysWF" />
  <br />
