import * as C from './style';

type ResumeItemProps = {
    title: string;
    value: number;
    color?: string; 
}

const ResumeItem = ({title, value, color}: ResumeItemProps) => {
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>R${value}</C.Info>
        </C.Container>
    )
}

export default ResumeItem;