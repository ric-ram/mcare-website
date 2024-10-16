'use client';

import {
  AppointmentFormProps,
  AppointmentsInputs,
  ModalTypes,
  OptionProp,
  RecruitInputs,
  TestimonialInputs,
} from '@/app/types/componentTypes';
import { storage } from '@/firebase/config';
import { addData } from '@/firebase/controlData';
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
  InputLeftAddon,
  InputLeftElement,
  Link,
  Select,
  Text,
  Textarea,
  VStack,
  useDisclosure,
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
import { Rating } from '@mui/material';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  useForm,
} from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { SubmitModal } from './modals';

const NAME_REGEX =
  /^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+([ \-']{0,1}[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+){0,2}[.]{0,1}$/;

const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const COUNTRY_CODE_REGEX = /^[+](\d{2}|\d{3})$/;

const specializationAreas: OptionProp[] = [
  {
    label: 'Fisioterapeuta',
    value: 'Fisioterapeuta',
  },
  {
    label: 'Terapeuta Ocupacional',
    value: 'Terapeuta Ocupacional',
  },
  {
    label: 'Nutricionista',
    value: 'Nutricionista',
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

const Options = (props: { options: OptionProp[] }) => {
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

const PopoverForm = (props: {
  errors: FieldErrors<AppointmentsInputs>;
  register: UseFormRegister<AppointmentsInputs>;
  isDirty: boolean;
  isValid: boolean;
  isSubmitting: boolean;
}) => {
  return (
    <VStack spacing={2} zIndex={3} overflow={'scroll'}>
      <FormControl isInvalid={Boolean(props.errors.name)}>
        <FormLabel color={'darkBlue'} fontSize={'16px'}>
          Nome*
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
            minWidth={'320px'}
            height={'44px'}
            focusBorderColor='darkBlue'
            {...props.register('name', {
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
        {!props.errors.name ? (
          <FormHelperText fontSize={'12px'}>
            O seu primeiro e último nome
          </FormHelperText>
        ) : (
          <FormErrorMessage fontSize={'12px'}>
            {props.errors.name.message?.toString()}
          </FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(props.errors.email)}>
        <FormLabel color={'darkBlue'} fontSize={'16px'}>
          Email*
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
            minWidth={'320px'}
            height={'44px'}
            focusBorderColor='darkBlue'
            {...props.register('email', {
              required: 'Este campo é obrigatório',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Por favor insira um email válido',
              },
            })}
          />
        </InputGroup>
        {!props.errors.email ? (
          <FormHelperText fontSize={'12px'}>
            O seu email de contacto
          </FormHelperText>
        ) : (
          <FormErrorMessage fontSize={'12px'}>
            {props.errors.email.message?.toString()}
          </FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(props.errors.phone)}>
        <FormLabel color={'darkBlue'} fontSize={'16px'}>
          Contacto telefónico*
        </FormLabel>

        <InputGroup>
          <InputLeftAddon px={0} height={'44px'} width={'105px'}>
            <InputLeftElement pointerEvents='none' ml={1} mr={12} h='full'>
              <Icon as={Phone} color={'darkBlue'} />
            </InputLeftElement>
            <Input
              id='country_code'
              key={'cc'}
              type='text'
              name='countryCode'
              placeholder='+351'
              height={'44px'}
              focusBorderColor='darkBlue'
              ml={10}
              px={2}
              borderRadius={'0.375rem 0 0 0.375rem'}
              borderLeftColor={'transparent'}
              {...props.register('countryCode', {
                pattern: {
                  value: COUNTRY_CODE_REGEX,
                  message: 'Por favor insira um código válido',
                },
              })}
            />
          </InputLeftAddon>
          <Input
            id='phone'
            type='number'
            name='phone'
            placeholder='Telefone'
            bg={'white'}
            minWidth={'215px'}
            height={'44px'}
            focusBorderColor='darkBlue'
            {...props.register('phone', {
              required: 'Este campo é obrigatório',
              minLength: { value: 9, message: 'O número deve ter 9 digitos' },
              maxLength: { value: 9, message: 'O número deve ter 9 digitos' },
            })}
          />
        </InputGroup>
        {!props.errors.phone ? (
          <FormHelperText fontSize={'12px'}>
            O seu número de telemóvel
          </FormHelperText>
        ) : (
          <FormErrorMessage fontSize={'12px'}>
            {props.errors.phone.message?.toString()}
          </FormErrorMessage>
        )}
        {props.errors.countryCode && (
          <FormErrorMessage fontSize={'12px'}>
            {props.errors.countryCode.message?.toString()}
          </FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(props.errors.message)}>
        <FormLabel color={'darkBlue'} fontSize={'16px'}>
          Mensagem*
        </FormLabel>

        <InputGroup>
          <Textarea
            //value={message}
            id='message'
            name='message'
            placeholder='Mensagem...'
            bg={'white'}
            minWidth={'320px'}
            minHeight={'80px'}
            focusBorderColor='darkBlue'
            //onChange={handleMessageInputChange}
            {...props.register('message', {
              required: 'Este campo é obrigatório',
            })}
          />
        </InputGroup>
        {!props.errors.message ? (
          <FormHelperText width={'320px'} fontSize={'12px'}>
            Por favor deixe-nos uma mensagem para que possa ser contactada mais
            tarde
          </FormHelperText>
        ) : (
          <FormErrorMessage fontSize={'12px'}>
            {props.errors.message.message?.toString()}
          </FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(props.errors.agree)}>
        <HStack minWidth={'320px'}>
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
            {...props.register('agree', {
              required: { value: true, message: 'Este campo é obrigatório' },
            })}
          >
            <Text color={'black'} fontSize={'14px'}>
              Li e aceito os termos da{' '}
              <Link
                href='politica-privacidade'
                color={'darkBlue'}
                fontSize={'14px'}
              >
                política de privacidade.
              </Link>
            </Text>
          </Checkbox>
          <FormErrorMessage fontSize={'12px'}>
            {props.errors.agree && props.errors.agree.message?.toString()}
          </FormErrorMessage>
        </HStack>
      </FormControl>

      <Button
        mt={5}
        colorScheme='darkBlues'
        type='submit'
        variant='darkSolid'
        size={'regular'}
        isLoading={props.isSubmitting}
        isDisabled={!props.isDirty || !props.isValid}
      >
        Enviar Mensagem
      </Button>
    </VStack>
  );
};

const PageForm = (props: {
  errors: FieldErrors<AppointmentsInputs>;
  register: UseFormRegister<AppointmentsInputs>;
  isDirty: boolean;
  isValid: boolean;
  isSubmitting: boolean;
  control: Control<AppointmentsInputs, any>;
}) => {
  return (
    <VStack spacing={8}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: 4, lg: 8 }}
        width={'full'}
      >
        <FormControl isInvalid={Boolean(props.errors.name)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Nome*
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
              {...props.register('name', {
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
          {!props.errors.name ? (
            <FormHelperText>O seu primeiro e último nome</FormHelperText>
          ) : (
            <FormErrorMessage>
              {props.errors.name.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(props.errors.email)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Email*
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
              {...props.register('email', {
                required: 'Este campo é obrigatório',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Por favor insira um email válido',
                },
              })}
            />
          </InputGroup>
          {!props.errors.email ? (
            <FormHelperText>O seu email de contacto</FormHelperText>
          ) : (
            <FormErrorMessage>
              {props.errors.email.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(props.errors.phone)}>
          <FormLabel color={'darkBlue'} fontSize={'18px'}>
            Contacto telefónico*
          </FormLabel>

          <InputGroup>
            <InputLeftAddon px={0} height={'44px'} width={'105px'}>
              <InputLeftElement pointerEvents='none' ml={1} mr={12} h='full'>
                <Icon as={Phone} color={'darkBlue'} />
              </InputLeftElement>
              <Input
                id='country_code'
                key={'cc'}
                type='text'
                name='countryCode'
                placeholder='+351'
                height={'44px'}
                focusBorderColor='darkBlue'
                ml={10}
                px={2}
                borderRadius={'0.375rem 0 0 0.375rem'}
                borderLeftColor={'transparent'}
                {...props.register('countryCode', {
                  pattern: {
                    value: COUNTRY_CODE_REGEX,
                    message: 'Por favor insira um código válido',
                  },
                })}
              />
            </InputLeftAddon>
            <Input
              id='phone'
              key={'tel'}
              type='number'
              name='phone'
              placeholder='Telefone'
              bg={'white'}
              width={'full'}
              height={'44px'}
              focusBorderColor='darkBlue'
              {...props.register('phone', {
                required: 'Este campo é obrigatório',
                minLength: {
                  value: 9,
                  message: 'Apenas números de 9 e 10 digitos aceites',
                },
                maxLength: {
                  value: 10,
                  message: 'Apenas números de 9 e 10 digitos aceites',
                },
              })}
            />
          </InputGroup>
          {!props.errors.phone ? (
            <FormHelperText>O seu número de telemóvel</FormHelperText>
          ) : (
            <FormErrorMessage>
              {props.errors.phone.message?.toString()}
            </FormErrorMessage>
          )}
          {props.errors.countryCode && (
            <FormErrorMessage>
              {props.errors.countryCode.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>
      </Flex>

      <FormControl isInvalid={Boolean(props.errors.message)}>
        <FormLabel color={'darkBlue'} fontSize={'18px'}>
          Mensagem*
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
            {...props.register('message', {
              required: 'Este campo é obrigatório',
            })}
          />
        </InputGroup>
        {!props.errors.message ? (
          <FormHelperText width={'full'}>
            Por favor deixe-nos uma mensagem para que possa ser contactada mais
            tarde
          </FormHelperText>
        ) : (
          <FormErrorMessage>
            {props.errors.message.message?.toString()}
          </FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(props.errors.agree)}>
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
            {...props.register('agree', {
              required: { value: true, message: 'Este campo é obrigatório' },
            })}
          >
            <Text color={'black'}>
              Li e aceito os termos da{' '}
              <Link href='politica-privacidade' color={'darkBlue'}>
                política de privacidade.
              </Link>
            </Text>
          </Checkbox>
        </Center>
        <Center>
          <FormErrorMessage>
            {props.errors.agree && props.errors.agree.message?.toString()}
          </FormErrorMessage>
        </Center>
      </FormControl>

      <Button
        colorScheme='pastelBlues'
        type='submit'
        size={'regular'}
        variant={'lightSolid'}
        isLoading={props.isSubmitting}
        color={'Black'}
        isDisabled={!props.isDirty || !props.isValid}
      >
        Enviar Mensagem
      </Button>
    </VStack>
  );
};

export const AppointmentsForm = ({ popover = false }: AppointmentFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid, isSubmitSuccessful },
  } = useForm<AppointmentsInputs>({
    mode: 'onChange',
  });

  async function onSubmitAppointment(values: RecruitInputs) {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));

    const res = await fetch('/api/email/appointments', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.status !== 200) return false;

        return true;
      })
      .catch((err) => false);
    //alert(JSON.stringify(`${res.message}`));
    setIsSuccess(res);
    onOpen();
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitAppointment)}>
        {popover ? (
          <PopoverForm
            errors={errors}
            register={register}
            isDirty={isDirty}
            isValid={isValid}
            isSubmitting={isSubmitting}
          />
        ) : (
          <PageForm
            errors={errors}
            register={register}
            isDirty={isDirty}
            isValid={isValid}
            isSubmitting={isSubmitting}
            control={control}
          />
        )}
      </form>
      <SubmitModal
        onClose={onClose}
        isOpen={isOpen}
        success={isSuccess}
        type={ModalTypes.Appointment}
      />
    </>
  );
};

export const TestimonialForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid, isSubmitSuccessful },
  } = useForm<TestimonialInputs>({
    mode: 'onChange',
  });

  let inputRef: HTMLInputElement | null;

  async function onSubmitTestimonial(values: TestimonialInputs) {
    const id = uuid();
    const imageSrc = values?.image?.name
      ? `/docs/imagens/testemunhos/${id}/${values?.image?.name}`
      : '';
    const dbData = {
      nome: values.name,
      email: values.email,
      avaliacao: values.rating,
      testemunho: values.testimonial,
      concorda: values.agree,
      aprovado: false,
      visivel: false,
      destaque: false,
      urlImagem: imageSrc,
      altImagem: values.name.toLowerCase() + ' image',
    };

    const dbRes = await addData('testemunhos', dbData).then(async () => {
      const storageRef = ref(storage, imageSrc);
      let imageUrl = '';

      if (imageSrc != '') {
        imageUrl = await uploadBytes(storageRef, values.image)
          .then(async () => {
            return await getDownloadURL(storageRef)
              .then((url) => url)
              .catch(() => '');
          })
          .catch(() => '');
      }

      const formData = new FormData();
      const emailMessage = {
        id,
        name: values.name,
        email: values.email,
        rating: values.rating,
        testimonial: values.testimonial,
        imageName: values.image?.name,
        imageSrc: imageUrl,
      };

      Object.keys(emailMessage).forEach((key) =>
        formData.append(key, emailMessage[key]),
      );

      return fetch('/api/email/testimonials', {
        method: 'POST',
        body: formData,
      })
        .then((res) => {
          if (res.status !== 200) return false;

          return true;
        })
        .catch(() => false);
    });
    // alert(JSON.stringify(`${dbRes.message}`));
    setIsSuccess(dbRes);
    onOpen();
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitTestimonial)}>
        <VStack spacing={8}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={{ base: 4, lg: 8 }}
            width={'full'}
          >
            <FormControl isInvalid={Boolean(errors.name)}>
              <FormLabel color={'darkBlue'} fontSize={'18px'}>
                Nome *
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
                Email *
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
              rules={{
                validate: (value) =>
                  value === undefined ||
                  validateFileSize(value) ||
                  'A imagem não é válida',
              }}
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

          <Controller
            name='rating'
            control={control}
            rules={{ required: 'Este campo é obrigatório' }}
            render={({ field: { value, onChange } }) => {
              return (
                <FormControl isInvalid={Boolean(errors.rating)}>
                  <FormLabel color={'darkBlue'} fontSize={'18px'}>
                    Avaliação *
                  </FormLabel>
                  <Rating
                    name='rating'
                    precision={0.5}
                    value={Number(value)}
                    onChange={onChange}
                  />
                  {!errors.rating ? (
                    <FormHelperText>Deixe aqui a sua avaliação</FormHelperText>
                  ) : (
                    <FormErrorMessage>
                      {errors.rating.message?.toString()}
                    </FormErrorMessage>
                  )}
                </FormControl>
              );
            }}
          />

          <FormControl isInvalid={Boolean(errors.testimonial)}>
            <FormLabel color={'darkBlue'} fontSize={'18px'}>
              Testemunho *
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
                  required: {
                    value: true,
                    message: 'Este campo é obrigatório',
                  },
                })}
              >
                <Text color={'black'}>
                  Li e aceito os termos da{' '}
                  <Link href='politica-privacidade' color={'darkBlue'}>
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
      <SubmitModal
        onClose={onClose}
        isOpen={isOpen}
        success={isSuccess}
        type={ModalTypes.Testimonial}
      />
    </>
  );
};

export const RecruitForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid, isSubmitSuccessful },
  } = useForm<RecruitInputs>({
    mode: 'onChange',
  });

  let inputRef: HTMLInputElement | null;

  async function onSubmitRecruit(values: RecruitInputs) {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));

    const res = await fetch('/api/email/recruit', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.status !== 200) return false;

        return true;
      })
      .catch((err) => false);
    //alert(JSON.stringify(`${res.message}`));
    setIsSuccess(res);
    onOpen();
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitRecruit)}>
        <VStack spacing={8}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={{ base: 4, lg: 8 }}
            width={'full'}
          >
            <FormControl isInvalid={Boolean(errors.name)}>
              <FormLabel color={'darkBlue'} fontSize={'18px'}>
                Nome *
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
                <FormHelperText>O seu primeiro e último nome.</FormHelperText>
              ) : (
                <FormErrorMessage>
                  {errors.name.message?.toString()}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={Boolean(errors.email)}>
              <FormLabel color={'darkBlue'} fontSize={'18px'}>
                Email *
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
                <FormHelperText>O seu email de contacto.</FormHelperText>
              ) : (
                <FormErrorMessage>
                  {errors.email.message?.toString()}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={Boolean(errors.phone)}>
              <FormLabel color={'darkBlue'} fontSize={'18px'}>
                Contacto telefónico *
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
                <FormHelperText>O seu número de telemóvel.</FormHelperText>
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
                Zona de actuação *
              </FormLabel>

              <InputGroup>
                <InputGroup>
                  <InputLeftElement h='full'>
                    <Icon as={LocationOnRounded} color={'darkBlue'} />
                  </InputLeftElement>
                  <Input
                    id='actuationZone'
                    type='text'
                    name='actuationZone'
                    placeholder='Zona de actuação'
                    bg={'white'}
                    width={'full'}
                    height={'44px'}
                    focusBorderColor='darkBlue'
                    {...register('actuationZone', {
                      required: 'Este campo é obrigatório',
                    })}
                  />
                </InputGroup>
              </InputGroup>
              {!errors.actuationZone ? (
                <FormHelperText>Área geográfica onde pratica.</FormHelperText>
              ) : (
                <FormErrorMessage>
                  {errors.actuationZone.message?.toString()}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={Boolean(errors.specializationArea)}>
              <FormLabel color={'darkBlue'} fontSize={'18px'}>
                Área de Especialização *
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
                <FormHelperText>A sua área de especialização.</FormHelperText>
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
                      Curriculo *
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
                      <FormHelperText>O seu curriculo.</FormHelperText>
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
              Mensagem *
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
                Por favor deixe-nos uma mensagem a explicar porque deseja
                trabalhar conosco.
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
                  required: {
                    value: true,
                    message: 'Este campo é obrigatório',
                  },
                })}
              >
                <Text color={'black'}>
                  Li e aceito os termos da{' '}
                  <Link href='politica-privacidade' color={'darkBlue'}>
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
      <SubmitModal
        onClose={onClose}
        isOpen={isOpen}
        success={isSuccess}
        type={ModalTypes.Recruit}
      />
    </>
  );
};
