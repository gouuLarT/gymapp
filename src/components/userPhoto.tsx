import { Image, IImageProps } from "native-base"

type Props = IImageProps & {
    size: number;
}

export function UserPhoto({ size, ...rest}: Props){
    return(
        <Image 
        w={size}
        h={size}
        borderColor='gray.500'
        borderWidth={2}
        rounded="full"
        {...rest}
        />
    )
}