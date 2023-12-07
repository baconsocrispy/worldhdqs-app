// library
import { FC } from "react";

// types
type WebsitePreviewProps = {
  src: string;
}

const WebsitePreview: FC<WebsitePreviewProps> = ({ src }) => {
  return (
    <div className="website-preview">
      <iframe src={ src } /> 
    </div>
  )
};

export default WebsitePreview;