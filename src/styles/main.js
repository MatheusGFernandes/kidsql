import styled from 'styled-components/native';

export const View = styled.View`

    background-color: #fffcf7;
    flex: 1;

`;

export const ViewEnd = styled.View`

    background-color: #fffcf7;
    flex: 1;
    justify-content: flex-end;

`;

export const ScrollView = styled.ScrollView`

    background-color: #fffcf7;
    flex: 1;

`;

export const Modulo = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`

    background-color: ${({disabled}) => disabled ? "#E9E9E9" : "#0074b4"};
    border-radius: 5px;
    padding: 10px 12px;
    width: 95%;
    margin: 15px 10px 0px;
`;

export const TextModulo = styled.Text`

    font-size: 16px;
    margin-left: 5px;
    align-self: flex-start;
    color: #FFF;
    font-family: "Poppins_500Medium";
`;

export const Text = styled.Text`

    font-size: 16px;
    margin: 15px 15px 0px;
    text-align: justify;
    font-family: "Poppins_500Medium";

`;

export const TextRed = styled.Text`

    font-size: 18px;
    /* margin: 0px 15px 0px; */
    text-align: justify;
    color: #F01D1D;

`;

export const TextGreen = styled.Text`

    font-size: 18px;
    /* margin: 0px 15px 0px; */
    text-align: justify;
    color: #00b34c;

`;

export const TextPurple = styled.Text`

    font-size: 18px;
    /* margin: 15px 15px 0px; */
    text-align: justify;
    color: #5b1d99;

`;

export const TextBlue = styled.Text`

    font-size: 18px;
    /* margin: 0px 15px 0px; */
    text-align: justify;
    color: #0074b4;
`;

export const Title = styled.Text`

    font-size: 24px;
    margin: 15px 15px 0px;
    text-align: center;
    font-family: "Poppins_500Medium";
`;

export const SubTitle = styled.Text`

    font-size: 24px;
    margin: 20px;
    text-align: center;
    font-family: "Poppins_500Medium";
`;

export const ViewMainButton = styled.View`

    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`;

export const MainButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`

    background-color: #0074b4;
    border-radius: 10px;
    padding: 10px 12px;
    width: 200px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: center;

`;

export const TextMainButton = styled.Text`

    font-size: 20px;
    color: #FFF;

`;

export const Logo = styled.Image.attrs({
    source: require("../assets/logo.png")
})`

    margin-top: 15px;
    height: 124px;
    width: 124px;
    align-self: center;
    border-width: 1px;
    border-color: black;
    border-radius: 60px;
`;

export const ViewImage = styled.View`

    background-color: #fffcf7;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Image  = styled.Image`

    margin-top: 15px;
    height: 240px;
    width: 240px;
    margin-bottom: 15px;
    align-self: center;

`;

export const ViewTable = styled.View`

    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    margin-bottom: 10px;
`;

