'use client';

import {
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Select,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import {
  AttachFileRounded,
  Email,
  ImageRounded,
  LocalHospitalRounded,
  LocationOnRounded,
  Person,
  Phone,
} from '@mui/icons-material';
//import { Select } from "chakra-react-select";
import { Controller, useForm } from 'react-hook-form';

type appointmentFormProps = {
  popover?: boolean;
};

type appointmentsInputs = {
  name: string;
  email: string;
  phone: number;
  message: string;
  agree: boolean;
};

type testimonialInputs = {
  name: string;
  email: string;
  testimonial: string;
  agree: boolean;
  image?: File;
};

type recruitInputs = {
  name: string;
  email: string;
  phone: number;
  actuationZone: string;
  specializationArea: string;
  file: File;
  message: string;
  agree: boolean;
};

type optionProp = {
  label: string;
  value: string;
};

const NAME_REGEX =
  /^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+([ \-']{0,1}[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+){0,2}[.]{0,1}$/;

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const actuationZones: optionProp[] = [
  {
    label: 'Lisboa',
    value: 'Lisboa',
  },
  {
    label: 'Setúbal',
    value: 'Setúbal',
  },
  {
    label: ' Santarém',
    value: 'Santarém',
  },
];

const specializationAreas: optionProp[] = [
  {
    label: 'Fisioterapeuta',
    value: 'Fisioterapeuta',
  },
  {
    label: 'Terapeuta Ocupacional',
    value: 'Terapeuta Ocupacional',
  },
  {
    label: 'Cardiorrespiratória',
    value: 'Cardiorrespiratória',
  },
  {
    label: 'Terapeuta da Fala',
    value: 'Terapeuta da Fala',
  },
  {
    label: 'Neuropsicólogo/a',
    value: 'Neuropsicólogo/a',
  },
  {
    label: 'Outro',
    value: 'Outro',
  },
];

function onSubmit(values: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      resolve(values);
    }, 3000);
  });
}

const validateFileSize = (value: File) => {
  const fsMb = value.size / (1024 * 1024);
  const MAX_FILE_SIZE = 10;
  if (fsMb > MAX_FILE_SIZE) {
    return 'Apenas ficheiro com um máximo de 10MB';
  }
  return true;
};

const validateFileType = (value: File) => {
  if (
    value.type != 'application/pdf' &&
    value.type != 'application/msword' &&
    value.type !=
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    return 'Apenas ficheiros pdf, doc ou docx';
  }
  return validateFileSize(value);
};

const Options = (props: { options: optionProp[] }) => {
  return (
    <>
      {props.options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </>
  );
};

export const AppointmentsForm = ({ popover = false }: appointmentFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<appointmentsInputs>({
    mode: 'onChange',
  });

  const PopoverForm = () => {
    return (
      <VStack spacing={4} zIndex={3}>
        <FormControl isInvalid={Boolean(errors.name)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Nome
          </FormLabel>

          <InputGroup>
            <InputLeftElement h='full'>
              <Icon as={Person} color={'darkBlue'} />
            </InputLeftElement>
            <Input
              id='name'
              type='text'
              name='name'
              placeholder='Nome'
              bg={'white'}
              width={'320px'}
              height={'44px'}
              focusBorderColor='darkBlue'
              {...register('name', {
                required: 'Este campo é obrigatório',
                pattern: {
                  value: NAME_REGEX,
                  message: 'Por favor insira um nome válido',
                },
                minLength: {
                  value: 3,
                  message: 'Deve ter pelo menos 3 caracteres',
                },
              })}
            />
          </InputGroup>
          {!errors.name ? (
            <FormHelperText>O seu primeiro e último nome</FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.name.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Email
          </FormLabel>

          <InputGroup>
            <InputLeftElement h='full'>
              <Icon as={Email} color={'darkBlue'} />
            </InputLeftElement>
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='Email'
              bg={'white'}
              width={'320px'}
              height={'44px'}
              focusBorderColor='darkBlue'
              {...register('email', {
                required: 'Este campo é obrigatório',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Por favor insira um email válido',
                },
              })}
            />
          </InputGroup>
          {!errors.email ? (
            <FormHelperText>O seu email de contacto</FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.email.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.phone)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Contacto telefónico
          </FormLabel>

          <InputGroup>
            <InputLeftElement h='full'>
              <Icon as={Phone} color={'darkBlue'} />
            </InputLeftElement>
            <Input
              id='phone'
              type='number'
              name='phone'
              placeholder='Telefone'
              bg={'white'}
              width={'320px'}
              height={'44px'}
              focusBorderColor='darkBlue'
              {...register('phone', {
                required: 'Este campo é obrigatório',
                minLength: { value: 9, message: 'O número deve ter 9 digitos' },
                maxLength: { value: 9, message: 'O número deve ter 9 digitos' },
              })}
            />
          </InputGroup>
          {!errors.phone ? (
            <FormHelperText>O seu número de telemóvel</FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.phone.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.message)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Mensagem
          </FormLabel>

          <InputGroup>
            <Textarea
              //value={message}
              id='message'
              name='message'
              placeholder='Mensagem...'
              bg={'white'}
              width={'320px'}
              minHeight={'120px'}
              focusBorderColor='darkBlue'
              //onChange={handleMessageInputChange}
              {...register('message', {
                required: 'Este campo é obrigatório',
              })}
            />
          </InputGroup>
          {!errors.message ? (
            <FormHelperText width={'320px'}>
              Por favor deixe-nos uma mensagem para que possa ser contactada
              mais tarde
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.message.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.agree)}>
          <Checkbox
            id='agree'
            name='agree'
            size='md14'
            iconSize={'10px'}
            borderColor={'darkBlue'}
            variant={'rounded'}
            _hover={{
              '& .chakra-checkbox__control': {
                background: 'grey',
                borderColor: 'darkBlue',
              },
            }}
            _checked={{
              '& .chakra-checkbox__control': {
                background: 'darkBlue',
                borderColor: 'darkBlue',
              },
            }}
            {...register('agree', {
              required: { value: true, message: 'Este campo é obrigatório' },
            })}
          >
            <Text color={'black'}>
              Li e aceito os termos da{' '}
              <Link href='#' color={'darkBlue'}>
                política de privacidade.
              </Link>
            </Text>
          </Checkbox>
          <FormErrorMessage>
            {errors.agree && errors.agree.message?.toString()}
          </FormErrorMessage>
        </FormControl>

        <Button
          mt={6}
          colorScheme='darkBlues'
          type='submit'
          variant='darkSolid'
          size={'regular'}
          isLoading={isSubmitting}
          isDisabled={!isDirty || !isValid}
        >
          Enviar Mensagem
        </Button>
      </VStack>
    );
  };

  const PageForm = () => {
    return (
      <VStack spacing={8}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 4, lg: 8 }}
          width={'full'}
        >
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Nome
            </FormLabel>

            <InputGroup>
              <InputLeftElement h='full'>
                <Icon as={Person} color={'darkBlue'} />
              </InputLeftElement>
              <Input
                id='name'
                type='text'
                name='name'
                placeholder='Nome'
                bg={'white'}
                width={'full'}
                height={'44px'}
                focusBorderColor='darkBlue'
                {...register('name', {
                  required: 'Este campo é obrigatório',
                  pattern: {
                    value: NAME_REGEX,
                    message: 'Por favor insira um nome válido',
                  },
                  minLength: {
                    value: 3,
                    message: 'Deve ter pelo menos 3 caracteres',
                  },
                })}
              />
            </InputGroup>
            {!errors.name ? (
              <FormHelperText>O seu primeiro e último nome</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.name.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Email
            </FormLabel>

            <InputGroup>
              <InputLeftElement h='full'>
                <Icon as={Email} color={'darkBlue'} />
              </InputLeftElement>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='Email'
                bg={'white'}
                width={'full'}
                height={'44px'}
                focusBorderColor='darkBlue'
                {...register('email', {
                  required: 'Este campo é obrigatório',
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Por favor insira um email válido',
                  },
                })}
              />
            </InputGroup>
            {!errors.email ? (
              <FormHelperText>O seu email de contacto</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.email.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={Boolean(errors.phone)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Contacto telefónico
            </FormLabel>

            <InputGroup>
              <InputLeftElement h='full'>
                <Icon as={Phone} color={'darkBlue'} />
              </InputLeftElement>
              <Input
                id='phone'
                type='number'
                name='phone'
                placeholder='Telefone'
                bg={'white'}
                width={'full'}
                height={'44px'}
                focusBorderColor='darkBlue'
                {...register('phone', {
                  required: 'Este campo é obrigatório',
                  minLength: {
                    value: 9,
                    message: 'O número deve ter 9 digitos',
                  },
                  maxLength: {
                    value: 9,
                    message: 'O número deve ter 9 digitos',
                  },
                })}
              />
            </InputGroup>
            {!errors.phone ? (
              <FormHelperText>O seu número de telemóvel</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.phone.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>
        </Flex>

        <FormControl isInvalid={Boolean(errors.message)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Mensagem
          </FormLabel>

          <InputGroup>
            <Textarea
              //value={message}
              id='message'
              name='message'
              placeholder='Mensagem...'
              bg={'white'}
              width={'full'}
              minHeight={{ base: '367px', lg: '161px' }}
              focusBorderColor='darkBlue'
              //onChange={handleMessageInputChange}
              {...register('message', {
                required: 'Este campo é obrigatório',
              })}
            />
          </InputGroup>
          {!errors.message ? (
            <FormHelperText width={'full'}>
              Por favor deixe-nos uma mensagem para que possa ser contactada
              mais tarde
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.message.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.agree)}>
          <Center>
            <Checkbox
              id='agree'
              name='agree'
              size='md14'
              iconSize={'10px'}
              borderColor={'darkBlue'}
              variant={'rounded'}
              _hover={{
                '& .chakra-checkbox__control': {
                  background: 'grey',
                  borderColor: 'darkBlue',
                },
              }}
              _checked={{
                '& .chakra-checkbox__control': {
                  background: 'darkBlue',
                  borderColor: 'darkBlue',
                },
              }}
              {...register('agree', {
                required: { value: true, message: 'Este campo é obrigatório' },
              })}
            >
              <Text color={'black'}>
                Li e aceito os termos da{' '}
                <Link href='#' color={'darkBlue'}>
                  política de privacidade.
                </Link>
              </Text>
            </Checkbox>
          </Center>
          <Center>
            <FormErrorMessage>
              {errors.agree && errors.agree.message?.toString()}
            </FormErrorMessage>
          </Center>
        </FormControl>

        <Button
          colorScheme='pastelBlues'
          type='submit'
          size={'regular'}
          variant={'lightSolid'}
          isLoading={isSubmitting}
          color={'Black'}
          isDisabled={!isDirty || !isValid}
        >
          Enviar Mensagem
        </Button>
      </VStack>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {popover ? <PopoverForm /> : <PageForm />}
    </form>
  );
};

export const TestimonialForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<testimonialInputs>({
    mode: 'onChange',
  });

  let inputRef: HTMLInputElement | null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={8}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 4, lg: 8 }}
          width={'full'}
        >
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Nome
            </FormLabel>

            <InputGroup>
              <InputLeftElement h='full'>
                <Icon as={Person} color={'darkBlue'} />
              </InputLeftElement>
              <Input
                id='name'
                type='text'
                name='name'
                placeholder='Nome'
                bg={'white'}
                width={'full'}
                height={'44px'}
                focusBorderColor='darkBlue'
                {...register('name', {
                  required: 'Este campo é obrigatório',
                  pattern: {
                    value: NAME_REGEX,
                    message: 'Por favor insira um nome válido',
                  },
                  minLength: {
                    value: 3,
                    message: 'Deve ter pelo menos 3 caracteres',
                  },
                })}
              />
            </InputGroup>
            {!errors.name ? (
              <FormHelperText>O seu primeiro e último nome</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.name.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Email
            </FormLabel>

            <InputGroup>
              <InputLeftElement h='full'>
                <Icon as={Email} color={'darkBlue'} />
              </InputLeftElement>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='Email'
                bg={'white'}
                width={'full'}
                height={'44px'}
                focusBorderColor='darkBlue'
                {...register('email', {
                  required: 'Este campo é obrigatório',
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Por favor insira um email válido',
                  },
                })}
              />
            </InputGroup>
            {!errors.email ? (
              <FormHelperText>O seu email de contacto</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.email.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>

          <Controller
            control={control}
            name='image'
            rules={{ validate: validateFileSize }}
            render={({ field: { value, onChange } }) => {
              return (
                <FormControl isInvalid={Boolean(errors.image)}>
                  <FormLabel color={'darkBlue'} fontSize={'18px'}>
                    Imagem
                  </FormLabel>

                  <InputGroup>
                    <InputLeftElement h='full'>
                      <Icon as={ImageRounded} color={'darkBlue'} />
                    </InputLeftElement>
                    <input
                      name='image'
                      accept='image/*'
                      type='file'
                      ref={(node) => {
                        inputRef = node;
                      }}
                      style={{ display: 'none' }}
                      onChange={(e) => onChange(e.target.files[0])}
                    />

                    <Input
                      cursor='pointer'
                      placeholder='Clique para adicionar'
                      bg={'white'}
                      width={'full'}
                      height={'44px'}
                      focusBorderColor='darkBlue'
                      onClick={() => inputRef.click()}
                      readOnly={true}
                      value={value ? value.name : ''}
                    />
                  </InputGroup>

                  {!errors.image ? (
                    <FormHelperText>
                      Alguma fotografia que queira partilhar
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>
                      {errors.image.message?.toString()}
                    </FormErrorMessage>
                  )}
                </FormControl>
              );
            }}
          />
        </Flex>

        <FormControl isInvalid={Boolean(errors.testimonial)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Testemunho
          </FormLabel>

          <InputGroup>
            <Textarea
              id='testimonial'
              name='testimonial'
              placeholder='Escreva aqui o seu testemunho...'
              bg={'white'}
              width={'full'}
              minHeight={{ base: '367px', lg: '161px' }}
              focusBorderColor='darkBlue'
              {...register('testimonial', {
                required: 'Este campo é obrigatório',
              })}
            />
          </InputGroup>
          {!errors.testimonial ? (
            <FormHelperText width={'full'}>
              Por favor deixe-nos o seu testemunho sobre a sua experiência
              connosco
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.testimonial.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.agree)}>
          <Center>
            <Checkbox
              id='agree'
              name='agree'
              size='md14'
              iconSize={'10px'}
              borderColor={'darkBlue'}
              variant={'rounded'}
              _hover={{
                '& .chakra-checkbox__control': {
                  background: 'grey',
                  borderColor: 'darkBlue',
                },
              }}
              _checked={{
                '& .chakra-checkbox__control': {
                  background: 'darkBlue',
                  borderColor: 'darkBlue',
                },
              }}
              {...register('agree', {
                required: { value: true, message: 'Este campo é obrigatório' },
              })}
            >
              <Text color={'black'}>
                Li e aceito os termos da{' '}
                <Link href='#' color={'darkBlue'}>
                  política de privacidade.
                </Link>
              </Text>
            </Checkbox>
          </Center>
          <Center>
            <FormErrorMessage>
              {errors.agree && errors.agree.message?.toString()}
            </FormErrorMessage>
          </Center>
        </FormControl>

        <Button
          colorScheme='pastelBlues'
          type='submit'
          size={'regular'}
          variant={'lightSolid'}
          isLoading={isSubmitting}
          color={'Black'}
          isDisabled={!isDirty || !isValid}
        >
          Enviar Mensagem
        </Button>
      </VStack>
    </form>
  );
};

export const RecruitForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<recruitInputs>({
    mode: 'onChange',
  });

  let inputRef: HTMLInputElement | null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={8}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 4, lg: 8 }}
          width={'full'}
        >
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Nome
            </FormLabel>

            <InputGroup>
              <InputLeftElement h='full'>
                <Icon as={Person} color={'darkBlue'} />
              </InputLeftElement>
              <Input
                id='name'
                type='text'
                name='name'
                placeholder='Nome'
                bg={'white'}
                width={'full'}
                height={'44px'}
                focusBorderColor='darkBlue'
                {...register('name', {
                  required: 'Este campo é obrigatório',
                  pattern: {
                    value: NAME_REGEX,
                    message: 'Por favor insira um nome válido',
                  },
                  minLength: {
                    value: 3,
                    message: 'Deve ter pelo menos 3 caracteres',
                  },
                })}
              />
            </InputGroup>
            {!errors.name ? (
              <FormHelperText>O seu primeiro e último nome</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.name.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Email
            </FormLabel>

            <InputGroup>
              <InputLeftElement h='full'>
                <Icon as={Email} color={'darkBlue'} />
              </InputLeftElement>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='Email'
                bg={'white'}
                width={'full'}
                height={'44px'}
                focusBorderColor='darkBlue'
                {...register('email', {
                  required: 'Este campo é obrigatório',
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Por favor insira um email válido',
                  },
                })}
              />
            </InputGroup>
            {!errors.email ? (
              <FormHelperText>O seu email de contacto</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.email.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={Boolean(errors.phone)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Contacto telefónico
            </FormLabel>

            <InputGroup>
              <InputLeftElement h='full'>
                <Icon as={Phone} color={'darkBlue'} />
              </InputLeftElement>
              <Input
                id='phone'
                type='number'
                name='phone'
                placeholder='Telefone'
                bg={'white'}
                width={'full'}
                height={'44px'}
                focusBorderColor='darkBlue'
                {...register('phone', {
                  required: 'Este campo é obrigatório',
                  minLength: {
                    value: 9,
                    message: 'O número deve ter 9 digitos',
                  },
                  maxLength: {
                    value: 9,
                    message: 'O número deve ter 9 digitos',
                  },
                })}
              />
            </InputGroup>
            {!errors.phone ? (
              <FormHelperText>O seu número de telemóvel</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.phone.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>
        </Flex>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 4, lg: 8 }}
          width={'full'}
        >
          <FormControl isInvalid={Boolean(errors.actuationZone)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Zona de actuação
            </FormLabel>

            <HStack spacing={1}>
              <Flex height={'44px'} alignItems={'center'}>
                <Icon as={LocationOnRounded} color={'darkBlue'} top={'50%'} />
              </Flex>

              <Select
                id='actuationZone'
                name='actuationZone'
                placeholder='Zona de actuação'
                w={'full'}
                h={'44px'}
                bg={'white'}
                focusBorderColor='darkBlue'
                {...register('actuationZone', {
                  required: 'Este campo é obrigatório',
                })}
              >
                <Options options={actuationZones} />
              </Select>
            </HStack>

            <InputGroup>
              <InputLeftElement h='full'></InputLeftElement>
            </InputGroup>
            {!errors.actuationZone ? (
              <FormHelperText>Área geográfica onde pratica</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.actuationZone.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={Boolean(errors.specializationArea)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Área de Especialização
            </FormLabel>

            <HStack spacing={1}>
              <Flex height={'44px'} alignItems={'center'}>
                <Icon
                  as={LocalHospitalRounded}
                  color={'darkBlue'}
                  top={'50%'}
                />
              </Flex>

              <Select
                id='specializationArea'
                name='specializationArea'
                placeholder='Área de Especialização'
                w={'full'}
                h={'44px'}
                bg={'white'}
                focusBorderColor='darkBlue'
                {...register('specializationArea', {
                  required: 'Este campo é obrigatório',
                })}
              >
                <Options options={specializationAreas} />
              </Select>
            </HStack>
            {!errors.specializationArea ? (
              <FormHelperText>A sua área de especialização</FormHelperText>
            ) : (
              <FormErrorMessage>
                {errors.specializationArea.message?.toString()}
              </FormErrorMessage>
            )}
          </FormControl>

          <Controller
            control={control}
            name='file'
            rules={{
              required: 'Este campo é obrigatório',
              validate: validateFileType,
            }}
            render={({ field: { value, onChange } }) => {
              return (
                <FormControl isInvalid={Boolean(errors.file)}>
                  <FormLabel color={'darkBlue'} fontSize={'18px'}>
                    Curriculo
                  </FormLabel>

                  <InputGroup>
                    <InputLeftElement h='full'>
                      <Icon as={AttachFileRounded} color={'darkBlue'} />
                    </InputLeftElement>
                    <input
                      name='fie'
                      accept='application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      type='file'
                      ref={(node) => {
                        inputRef = node;
                      }}
                      style={{ display: 'none' }}
                      onChange={(e) => onChange(e.target.files[0])}
                    />

                    <Input
                      cursor='pointer'
                      placeholder='Clique para adicionar'
                      bg={'white'}
                      width={'full'}
                      height={'44px'}
                      focusBorderColor='darkBlue'
                      onClick={() => inputRef.click()}
                      readOnly={true}
                      value={value ? value.name : ''}
                    />
                  </InputGroup>

                  {!errors.file ? (
                    <FormHelperText>O seu curriculo</FormHelperText>
                  ) : (
                    <FormErrorMessage>
                      {errors.file.message?.toString()}
                    </FormErrorMessage>
                  )}
                </FormControl>
              );
            }}
          />
        </Flex>

        <FormControl isInvalid={Boolean(errors.message)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Mensagem
          </FormLabel>

          <InputGroup>
            <Textarea
              id='message'
              name='message'
              placeholder='Mensagem...'
              bg={'white'}
              width={'full'}
              minHeight={{ base: '367px', lg: '161px' }}
              focusBorderColor='darkBlue'
              {...register('message', {
                required: 'Este campo é obrigatório',
              })}
            />
          </InputGroup>
          {!errors.message ? (
            <FormHelperText width={'full'}>
              Por favor deixe-nos uma mensagem para que possa ser contactada
              mais tarde
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.message.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.agree)}>
          <Center>
            <Checkbox
              id='agree'
              name='agree'
              size='md14'
              iconSize={'10px'}
              borderColor={'darkBlue'}
              variant={'rounded'}
              _hover={{
                '& .chakra-checkbox__control': {
                  background: 'grey',
                  borderColor: 'darkBlue',
                },
              }}
              _checked={{
                '& .chakra-checkbox__control': {
                  background: 'darkBlue',
                  borderColor: 'darkBlue',
                },
              }}
              {...register('agree', {
                required: { value: true, message: 'Este campo é obrigatório' },
              })}
            >
              <Text color={'black'}>
                Li e aceito os termos da{' '}
                <Link href='#' color={'darkBlue'}>
                  política de privacidade.
                </Link>
              </Text>
            </Checkbox>
          </Center>
          <Center>
            <FormErrorMessage>
              {errors.agree && errors.agree.message?.toString()}
            </FormErrorMessage>
          </Center>
        </FormControl>

        <Button
          colorScheme='pastelBlues'
          type='submit'
          size={'regular'}
          variant={'lightSolid'}
          isLoading={isSubmitting}
          color={'Black'}
          isDisabled={!isDirty || !isValid}
        >
          Enviar Mensagem
        </Button>
      </VStack>
    </form>
  );
};
