import { Heading, Image, Text } from "@chakra-ui/react"
import logo from '../assets/text.png'

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={ 100 } marginBottom='1rem' />
      <Heading color="white" marginBottom='1rem'>
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Give some text below for extracting keywords
      </Text>
    </>
  )
}

export default Header;