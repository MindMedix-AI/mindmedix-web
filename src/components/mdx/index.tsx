import MdxVideo from './MdxVideo'
import MdxDiagram from './MdxDiagram'
import MdxCta from './MdxCta'
import MdxTable from './MdxTable'
import MdxBlockquote from './MdxBlockquote'
import MdxImage from './MdxImage'

export const mdxComponents = {
  Video: MdxVideo,
  Diagram: MdxDiagram,
  CTA: MdxCta,
  Table: MdxTable,
  Blockquote: MdxBlockquote,
  Image: MdxImage,
  table: (props: any) => <MdxTable {...props} />,
  blockquote: (props: any) => <MdxBlockquote {...props} />,
  img: (props: any) => <MdxImage {...props} />,
}
