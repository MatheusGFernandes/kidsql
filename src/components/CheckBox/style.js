import styled from 'styled-components/native';

export const View = styled.View`

    /* flex: 1; */
    background-color: #fffcf7;
    margin: 15px 0px 20px;

`;

export const ViewOptions = styled.View`

    flex-direction: row;

`;

export const Text = styled.Text`

    font-size: 16px;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 5px;

`;

export const TouchableOpacity = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`

    margin-top: 15px;
    margin-right: 10px;
   
`