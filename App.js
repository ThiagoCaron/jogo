import { View, StyleSheet, Text, Button } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Casa from "./Casa";
import { useState } from "react";

export default function App()
{
    const inicial = [0,0,0,0,0,0,0,0,0];

    const [player, setPlayer] = useState(1);
    const [tabuleiro, setTabuleiro] = useState(inicial);
    const [vencedor, setVencedor] = useState(0);

    function ganhador()
    {
        let opcoes = ["0,1,2", "3,4,5", "6,7,8", "0,3,6", "1,4,7", "2,5,8", "0,4,8", "2,4,6"];

        opcoes.forEach((item) => 
        {
            let posicao = item.split(",");
            const [pos1, pos2, pos3] = posicao;

            if (tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos2] == tabuleiro[pos3])
            {
                if(tabuleiro[pos1] != 0)
                {
                    setVencedor( tabuleiro[pos1] )
                    return;
                }
            }
        })
        const proximo = (player == 1)? 2 : 1;
        setPlayer(proximo);
    }

    function novoJogo()
    {
        setPlayer(1);
        setTabuleiro(inicial);
        setVencedor(0);
    }

    if (vencedor != 0)
    {
        return (
            <View style={css.tela}>
                <Text>O vencedor é {vencedor}</Text>
                <Button title="Novo jogo" onPress={novoJogo} />
            </View>
        )
    }
    else{
        
        return (
            <View style={css.tela}>
            <View style={css.tabuleiro}>
                <Casa
                    posicao={0}
                    tabuleiro={tabuleiro} 
                    gravar={setTabuleiro}
                    turno={player} 
                    alternar={ganhador} />
                <Casa 
                    posicao={1}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro} 
                    turno={player} 
                    alternar={ganhador} />
                <Casa 
                    posicao={2}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro} 
                    turno={player} 
                    alternar={ganhador} />

                <Casa 
                    posicao={3}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro} 
                    turno={player} 
                    alternar={ganhador} />
                <Casa 
                    posicao={4}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro} 
                    turno={player} 
                    alternar={ganhador} />
                <Casa 
                    posicao={5}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro} 
                    turno={player} 
                    alternar={ganhador} />

                <Casa 
                    posicao={6}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro} 
                    turno={player} 
                    alternar={ganhador} />
                <Casa 
                    posicao={7}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro} 
                    turno={player} 
                    alternar={ganhador} />
                <Casa 
                    posicao={8}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro} 
                    turno={player} 
                    alternar={ganhador} />

                <Text>Agora é a vez do jogador {player}</Text>

            </View>
        </View>
    )
    }
}

const css = StyleSheet.create({
    tela: {
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    tabuleiro: {
        width: 300,
        height: 300,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
    },
    casa: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})