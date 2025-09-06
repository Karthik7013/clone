import { CodeBlock } from "./code-block"
import { TableBlock } from "./table-block"
import { HrBlock } from "./hr-block"
import { LinkBlock } from "./link-block"
import { ListBlock, ListItemBlock, OrderedListBlock } from "./list-block"
import { ImageBlock } from "./img-block"
import { VideoBlock } from "./video-block"
import { AudioBlock } from "./audio-block"
import { HeadingBlock, ParagraphBlock, QuoteBlock } from "./text-block"
export const componentMap = {
    code: CodeBlock,
    table: TableBlock,
    hr: HrBlock,
    a: LinkBlock,
    ul: ListBlock,
    ol: OrderedListBlock,
    li: ListItemBlock,
    img: ImageBlock,
    video: VideoBlock,
    audio: AudioBlock,
    // // Headings
    h1: HeadingBlock(1),
    h2: HeadingBlock(2),
    h3: HeadingBlock(3),
    h4: HeadingBlock(4),
    h5: HeadingBlock(5),
    h6: HeadingBlock(6),
    // // Text
    p: ParagraphBlock,
    blockquote: QuoteBlock
}