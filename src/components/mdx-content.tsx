"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { TOC } from "./toc";
import { Image, Span } from "./image";
import { GIF } from "./gif";
import { H2, H3, P } from "./headings";
import { Table } from "./table";

type Props = {
  serialized: MDXRemoteSerializeResult;
};

const components = {
  TOC,
  GIF,
  Span,
  Image,
  p: P,
  h1: H2,
  h2: H2,
  h3: H3,
  h4: H3,
  h5: H3,
  h6: H3,
  table: Table,
};

export default function MDXContent({ serialized }: Props) {
  return <MDXRemote {...serialized} components={components} />;
}
