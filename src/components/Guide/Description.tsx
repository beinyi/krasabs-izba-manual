import { buttonTypes } from "@components/Main/buttons";

type DescriptionProps = {
    description: string,
    position: keyof typeof descriptionPositions,
}

export enum descriptionPositions {
    'default' = "guide_description",
    'pay' = "guide_description-pay",
    'service' = "guide_description-service",
    'rating' = "guide_description-rating"
}

const Description = ({ description, position }: DescriptionProps) => {
    return (<div className={descriptionPositions[position]}>
        {description !== "" &&
            description}
    </div>);
}

export default Description;