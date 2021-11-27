import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import {
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

import logo from "../../assets/img/Instagram_logo_800.png";

const Resigster = ({ navigation }) => {
  const [inputs, setInputs] = useState({ email: "", name: "", password: "" });

  const handleInputChange = (name, text) => {
    setInputs((t) => ({ ...t, [name]: text }));
  };
  const handleSignUp = () => {
    console.log("signup");
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
      <ContentContainer>
        <LogoImageView>
          <LogoImage style={{ resizeMode: "contain" }} source={logo} />
        </LogoImageView>
        <HeaderMention>
          친구들의 사진과 동영상을 보려면 가입하세요.
        </HeaderMention>
        <FormView>
          <EmailInput
            placeholder={"이메일 주소"}
            onChangeText={(text) => handleInputChange("email", text)}
            value={inputs.email}
          />
          <EmailInput
            placeholder={"사용자 이름"}
            onChangeText={(text) => handleInputChange("name", text)}
            value={inputs.name}
          />
          <PasswordInput
            placeholder={"비밀번호"}
            secureTextEntry
            onChangeText={(text) => handleInputChange("password", text)}
            value={inputs.password}
          />
          <SignUpBtn
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => handleSignUp()}
          >
            <SignUpText>가입하기</SignUpText>
          </SignUpBtn>
        </FormView>
        <HeaderMention>
          가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.
        </HeaderMention>
      </ContentContainer>
      <GoToSignInView>
        <LoginText>
          계정이 있으신가요?&nbsp;
          <LoginText
            style={{
              paddingHorizontal: 5,
              fontWeight: "bold",
              color: "#0095f6",
            }}
            onPress={() => {
              navigation.navigate("Landing");
            }}
          >
            로그인
          </LoginText>
        </LoginText>
      </GoToSignInView>
    </SafeAreaView>
  );
};

const ContentContainer = styled.View`
  padding: 0 30px;
`;

const LogoImageView = styled.View`
  margin: 50px 0 0;
  width: 100%;
  align-items: center;
`;
const LogoImage = styled.Image`
  width: 200px;
  height: 80px;
`;
const HeaderMention = styled.Text`
  font-size: 16px;
  color: #999;
  text-align: center;
`;

const FormView = styled.View`
  padding: 30px 0;
  width: 100%;
`;

const JoinInput = styled.TextInput`
  margin-bottom: 15px;
  padding: 10px;
  background: #ececec;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
`;
const EmailInput = styled(JoinInput)``;
const NameInput = styled(JoinInput)``;
const PasswordInput = styled(JoinInput)``;

const SignUpBtn = styled.TouchableHighlight`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  align-items: center;
  background: #0095f6;
  border-radius: 4px;
`;
const SignUpText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

const GoToSignInView = styled.View`
  padding: 15px 0;
  width: 100%;
  align-items: center;
  background: #ececec;
  border-top-width: 1px;
  border-color: #e3e3e3;
`;
const LoginText = styled.Text`
  font-size: 14px;
  color: #999;
`;
export default Resigster;
