import {ImageData} from './section-image';

export type SectionWithImage = {
    imageData?: ImageData,
    children?: any;
    className?: string;
    isHero?: boolean;
}
