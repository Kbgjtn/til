"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { TOC } from "./toc";
import { Image } from "./image";
import { H2, H3 } from "./headings";
import { Table } from "./table";

type Props = {
  serialized: MDXRemoteSerializeResult;
};

const components = {
  TOC,
  Image,
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
