export interface featuresComparisonItemsType {
    feature: string,
    description?: string,
    linkTag?: string,
    link?: string,
    includedPlans: string[]
}

export interface navBarLinksType {
    name: string;
    description: string;
    link: string;
    svg?: React.ReactNode
}

export interface alternateContentPage {
    name: string;
    description: string;
    image: string;
    link?: string;
    linkTag?: string;
    accordionName?: string;
    accordionDescription?: string;
    accordionList?: string[];
}