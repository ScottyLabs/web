import wrapElement from '../../utils/wrapElement';
import AfterEffectsIcon from '../AfterEffectsIcon';
import FacebookIcon from '../FacebookIcon';
import FigmaIcon from '../FigmaIcon';
import FlutterIcon from '../FlutterIcon';
import IllustratorIcon from '../IllustratorIcon';
import InstagramIcon from '../InstagramIcon';
import JavaIcon from '../JavaIcon';
import JavaScriptIcon from '../JavaScriptIcon';
import LinkIcon from '../LinkIcon';
import MailIcon from '../MailIcon';
import MattermostIcon from '../MattermostIcon';
import MediumIcon from '../MediumIcon';
import MongoDbIcon from '../MongoDbIcon';
import NextJsIcon from '../NextJsIcon';
import OpenStreetMapIcon from '../OpenStreetMapIcon';
import ProcreateIcon from '../ProcreateIcon';
import ReactIcon from '../ReactIcon';
import ScottyLabsIcon from '../ScottyLabsIcon';
import TailwindIcon from '../TailwindIcon';
import TypeScriptIcon from '../TypeScriptIcon';

const IconMapping = {
	'after-effects': <AfterEffectsIcon />,
	facebook: <FacebookIcon />,
	figma: <FigmaIcon />,
	flutter: <FlutterIcon />,
	illustrator: <IllustratorIcon />,
	instagram: <InstagramIcon />,
	java: <JavaIcon />,
	javascript: <JavaScriptIcon />,
	link: <LinkIcon />,
	mail: <MailIcon />,
	mattermost: <MattermostIcon />,
	mongodb: <MongoDbIcon />,
	medium: <MediumIcon />,
	nextjs: <NextJsIcon />,
	openstreetmap: <OpenStreetMapIcon />,
	procreate: <ProcreateIcon />,
	react: <ReactIcon />,
	scottylabs: <ScottyLabsIcon />,
	tailwind: <TailwindIcon />,
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
