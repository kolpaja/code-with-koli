import { FcGoogle } from 'react-icons/fc';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { FaFileSignature } from 'react-icons/fa';
import { GiSpellBook } from 'react-icons/gi';
import { Button, Form, Input, InputProps, Spin, message } from 'antd';
import Container from 'components/Container';
import CoolBox from 'components/cool-ui/CoolBox';
import CoolText from 'components/cool-ui/CoolText';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useCallback, useMemo, useState } from 'react';
import appConfig from 'appConfig';
import { fetcher } from 'lib/api';
import axios, { AxiosHeaders } from 'axios';
import EmptyGuestBook from './components/EmptyGuestBook';

const { appCode } = appConfig;

export default function GuestBook() {
  const { data: session, status, update } = useSession();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const meta = {
    title: 'Guestbook'
  };
  console.log(
    '🚀 ~ file: index.tsx:6 ~ GuestBook ~ session:',
    session?.user,
    status
  );

  // TODO get all guest books
  let guestbooks = [];

  const getLabel = useCallback(() => {
    if (status === 'authenticated') {
      return (
        <CoolText type="span">
          Hey 👋 <strong>{session.user.name}</strong> <br /> leave a sign to my
          📖GustBook 👇
        </CoolText>
      );
    } else {
      return 'Sing my GustBook';
    }
  }, [session, status]);

  const getAuthIcon = useMemo(() => {
    switch (status) {
      case 'authenticated':
        return (
          <Button
            htmlType="submit"
            icon={
              <FaFileSignature
                className="text-xl text-gray-900 dark:text-gray-100"
                title="sign"
              />
            }
          />
        );
      case 'loading':
        return <Spin size="small" />;
      case 'unauthenticated':
        return <Button onClick={() => signIn()}></Button>;
      default:
        break;
    }
  }, [status]);

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Something wrong happened. Try again!'
    });
  };

  const successForm = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully added a comment ☺️'
    });
  };

  const onFinish = async (values: any) => {
    const commentSubmitData = {
      comment: values.comment,
      appCode
    };
    console.log('Success:', commentSubmitData, process.env.NEXT_PUBLIC_CMS_URL);
    const result = await axios(
      process.env.NEXT_PUBLIC_CMS_URL + '/api/guestbook/sign-guestbook',
      {
        method: 'Post',
        headers: {
          Authorization: session.accessToken as AxiosHeaders
        },
        data: {
          ...commentSubmitData
        }
      }
    );
    console.log('result', { result });
    if (result.status === 200) {
      successForm();
      form.resetFields();
    } else {
      error();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    error();
  };

  return (
    <Container meta={meta}>
      {contextHolder}
      <CoolBox type="div" className="flex flex-col justify-center">
        {/* header line */}
        <CoolBox type="div" className="w-full relative mb-8 h-10">
          <div className="absolute bottom-4 left-0 w-full h-[2px] bg-zinc-200 dark:bg-gray-500 rounded-sm z-10" />
          <CoolText
            type="h1"
            className="text-3xl sm:text-5xl flex gap-2 justify-center items-center w-fit px-1 py-1 absolute left-1/3 sm:left-8 bottom-0 z-20 font-cookie"
          >
            GuestBook <GiSpellBook className="" />
          </CoolText>
        </CoolBox>

        {/* guestbook signs action*/}
        <CoolBox type="div" className="max-w-xl">
          {/* input sign */}
          <div className="mb-8">
            <label
              htmlFor="signInput"
              className="hover:cursor-pointer mb-4 block"
            >
              {getLabel()}
            </label>
            {status === 'unauthenticated' ? (
              <Button
                onClick={() => signIn()}
                icon={<FcGoogle />}
                className="flex items-center text-lg text-gray-900 dark:text-gray-100"
              >
                login with Google
              </Button>
            ) : (
              <Form
                form={form}
                name="guestbook-form"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label=""
                  name="comment"
                  rules={[
                    { required: true, message: 'Please type something...' }
                  ]}
                >
                  <Input
                    id="signInput"
                    allowClear
                    showCount
                    maxLength={114}
                    size="large"
                    className="text-xl"
                    addonAfter={
                      <CoolText type="span" className="hover:cursor-pointer">
                        {getAuthIcon}
                      </CoolText>
                    }
                  />
                </Form.Item>
                <Button
                  onClick={() => signOut()}
                  className="text-gray-900 dark:text-gray-100"
                >
                  Sign Out
                </Button>
              </Form>
            )}
          </div>
          {/* guest book signs list */}
        </CoolBox>
        <CoolBox
          type="section"
          className="bg-cyan-200 px-2 sm:px-4 py-2 max-w-3xl"
        >
          {/* list demo */}
          {guestbooks.length ? (
            <CoolBox type="div" className="flex justify-start gap-8 w-full">
              <p className="w-full">
                <CoolText type="span" className="text-xl font-semibold">
                  kolpaja
                </CoolText>
                : comment Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Id laborum quod totam nemo a
              </p>
              <div className="reactions flex gap-2">
                <AiFillHeart className="text-2xl" />
                <BiDotsVerticalRounded className="text-2xl" />
              </div>
            </CoolBox>
          ) : (
            <EmptyGuestBook />
          )}
        </CoolBox>
      </CoolBox>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}
  };
}
