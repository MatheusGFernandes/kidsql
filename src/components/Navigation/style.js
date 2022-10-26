import styled from 'styled-components/native';

export const ViewNavigation = styled.View`

    /* flex: 1; */
    flex-direction : row;
    align-items    : flex-end;
    justify-content: space-between;
    margin-top: 20px;
    background-color: #FF0000;

`;

export const ButtonNavigation = styled.TouchableOpacity`

    background-color: #0074b4;
    border-radius: 10px;
    padding: 8px 12px;
    width: 120px;
    margin: 0px 20px 20px;
    flex-direction: row;

`;

export const TextNavigation = styled.Text`

    font-size: 14px;
    color: #FFF;
    text-align: center;
    font-family: "Poppins_300Light";
`;
