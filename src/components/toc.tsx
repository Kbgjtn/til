import Link from "next/link";

type TOCProps = {
  summary?: string;
  items: string[];
};

export function TOC({ summary = "Contents", items }: TOCProps) {
  return (
    <details className="select-none ml-6">
      <summary>{summary}</summary>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="ml-4">
            <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
