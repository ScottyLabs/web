import wrapElement from "../../utils/wrapElement";
import AfterEffectsIcon from "../AfterEffectsIcon";
import FacebookIcon from "../FacebookIcon";
import FigmaIcon from "../FigmaIcon";
import IllustratorIcon from "../IllustratorIcon";
import InstagramIcon from "../InstagramIcon";
import MailIcon from "../MailIcon";
import MattermostIcon from "../MattermostIcon";
import MediumIcon from "../MediumIcon";
import ProcreateIcon from "../ProcreateIcon";
import ReactIcon from "../ReactIcon";
import ScottyLabsIcon from "../ScottyLabsIcon";
import TypeScriptIcon from "../TypeScriptIcon";

const IconMapping = {
  "after-effects": <AfterEffectsIcon />,
  facebook: <FacebookIcon />,
  figma: <FigmaIcon />,
  illustrator: <IllustratorIcon />,
  instagram: <InstagramIcon />,
  mail: <MailIcon />,
  mattermost: <MattermostIcon />,
  medium: <MediumIcon />,
  procreate: <ProcreateIcon />,
  react: <ReactIcon />,
  scottylabs: <ScottyLabsIcon />,
  typescript: <TypeScriptIcon />,
};

export type IconName = keyof typeof IconMapping;

interface Props {
  className?: string;
  name: IconName;
}

export default function Icon({ className, name }: Props) {
  return wrapElement(IconMapping[name])({ className });
}
