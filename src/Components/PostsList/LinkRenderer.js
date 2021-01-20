import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

function LinkRenderer(props){
    return <a href={props.href} target="_blank" rel="noreferrer noopener">{props.children}</a>
}

export const renderers = {
    link: LinkRenderer,
    code: ({language, value}) => {
        return <SyntaxHighlighter style={dark} language={language} children={value} />
      }
}