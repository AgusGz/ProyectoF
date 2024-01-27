import { Card, CardBody, Stack, Heading, Text, Button, ButtonGroup, CardFooter, Divider } from '@chakra-ui/react'
import React from 'react'
import ItemCount from '../ItemCount'

const item = ({ titulo, descripcion, precio}) => {
  return (
    <Card maxW='sm'>
        <CardBody>

            <Stack mt='6' spacing='3'>
                <Heading size='md'>{titulo}</Heading>
                <Text>
                    {descripcion}
                </Text>
                <Text color='blue.600' fontSize='2x1'>
                    ${precio}
                </Text>
            </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
            <ButtonGroup spacing='2'>
                <ItemCount/>
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default item