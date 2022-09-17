import { updateCurrentUser } from 'firebase/auth';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { auth } from '../../utils/firabase';
import styles from '../EditProfile/EditProfileStyle';
import { setUser } from '../store/index';

const EditProfile = () => {
  const theme = useSelector((state) => state.theme.activeTheme);
  // const user = useSelector((state) => state.user.user);
  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState(null);

  // const auth = getAuth();
  // const user = auth.currentUser;

  // updatePassword(user, password).then((repo) => {
  //   console.log('repopassword', repo);
  // });
  // updateEmail(user, email).then((repos) => {
  //   console.log('reposmail', repos);
  // });

  const handleSave = () => {
    updateCurrentUser(auth, email, password).then((response) => {
      console.log('response', response);
    });
  };

  const dispatch = useDispatch();

  return (
    <View style={theme === 'light' ? styles.container_light : styles.container_dark}>
      <CustomInput
        value={email}
        onChangeText={(newText) => setEmail({ newText })}
        placeholder="E-mail"
      />
      <CustomInput
        value={fullname}
        onChangeText={(newText) => setFullname({ newText })}
        placeholder="Fullname"
      />
      <CustomInput
        value={password}
        onChangeText={(newText) => setPassword({ newText })}
        placeholder="Password"
      />
      <CustomButton
        title="Save"
        onPress={() => {
          dispatch(
            setUser({
              fullname,
              password,
              email,
            })
          );
          handleSave();
          // updatePassword();
          // updateEmail();
        }}
      />
    </View>
  );
};

export default EditProfile;
