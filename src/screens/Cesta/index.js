import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import Texto from '../../components/Textos'

import topo from '../../../assets/topo.png'
import logo from '../../../assets/logo.png'

const width = Dimensions.get('screen').width;

export function Cesta() {
    return <>
        <Image source={topo} style={styles.topo} />
        <Texto style={styles.titulo}>Detalhe d a cesta</Texto>

        <View style={styles.cesta}>
            <Texto style={styles.nome}>Cesta d e Verduras</Texto>
            <View style={styles.viewFazenda}>
                <Image style={styles.imagemFazenda} source={logo} />
                <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto>Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha</Texto>
            <Texto style={styles.preco}>R$ 40,00</Texto>
        </View>
    </>


}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: 'bold'
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    viewFazenda: {
        flexDirection: "row",
        paddingVertical: 12
    }
})