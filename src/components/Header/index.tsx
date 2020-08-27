import React from 'react';
import { Text } from 'react-native';

import { Container, Avatar, RightSide, Button, OnlineStatus } from './styles';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus/>
      </Avatar>
      
      <RightSide>
          <Button>
             <MaterialIcons
             name="notifications-none"
             size={26}
             color={colors.black}/>
          </Button>

          <Button>
             <MaterialCommunityIcons
             name="message-outline"
             size={26}
             color={colors.black}/>
          </Button>

          <Button>
             <Feather
             name="search"
             size={26}
             color={colors.black}/>
          </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
