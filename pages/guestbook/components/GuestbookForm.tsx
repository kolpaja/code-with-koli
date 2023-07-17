'use client';
import { Button, Form, Input, Spin, message } from 'antd';
import appConfig from 'appConfig';
import axios, { AxiosHeaders } from 'axios';
import CoolText from 'components/cool-ui/CoolText';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';
import { FaFileSignature } from 'react-icons/fa';

type Props = {
  refetch: () => void;
  signOut: () => void;
};

const { appCode } = appConfig;

const GuestbookForm = ({ refetch, signOut }: Props) => {
  const { data: session, status, update } = useSession();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

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
      default:
        break;
    }
  }, [status]);

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
      refetch();
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
        rules={[{ required: true, message: 'Please type something...' }]}
      >
        <Input
          id="signInput"
          allowClear
          showCount
          maxLength={114}
          size="large"
          className="text-xl"
          placeholder="your comment..."
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
  );
};

export default GuestbookForm;
