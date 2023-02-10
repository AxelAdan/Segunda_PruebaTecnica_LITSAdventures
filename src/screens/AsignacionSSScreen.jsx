import React, { useState, useEffect } from 'react';
import { useColorScheme, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TopNavigation, TopNavigationAction, Icon, Divider, Layout, Text, Button } from '@ui-kitten/components';

export const AsignacionSSScreen = ({ navigation }) => {
    /* <-- Icons --> */
    // Icono de boton de regresar
    const goBackIcon = (props) => <Icon {...props} name='arrow-left-outline' fill='#797D7F' />;

    /* <-- Hooks --> */
    // Lista de direcciones.street par
    const [streetPar, setStreetPar] = useState([]);
    // ista de ss cuando direcciones.street es par
    const [ssStreetPar, setSsStreetPar] = useState([]);

    /* Variables de estado */
    var ss = 0; // Puntuación básica de idoneidad (SS)

    /* <-- Functions --> */
    // Regresa a la pantalla de bienvenida
    const navigateBack = () => navigation.goBack();
    const goBackAction = () => <TopNavigationAction icon={goBackIcon} onPress={navigateBack} />;

    // Limpia las listas
    const limpiarListas = () => {
        setStreetPar([]);
        setSsStreetPar([]);

        console.log("Listas limpiadas");
    };

    // Funcion donde si la longitud de direcciones.street es par, ss es el número de vocales del conductor.nombre multiplicado por 1,5
    const calcularSSNombreCalle = () => {
        var ss = 0; // Puntuación básica de idoneidad (SS)

        // Recorre el arreglo de direcciones.street
        for (let i = 0; i < direcciones.length; i++) {
            // Si direcciones.street es par
            if (direcciones[i].street.length % 2 === 0) {
                // Agrega direcciones.street a setStreetPar
                setStreetPar(streetPar => [...streetPar, direcciones[i].street]);

                // Contar vocales de cada conductor.nombre y multiplicar el numero de vocales de cada conductor.nombre por 1.5
                for (let j = 0; j < conductores.length; j++) {
                    // Contar vocales de cada conductor.nombre
                    var nombre = conductores[j].nombre;
                    //var vocales = nombre.match(/[aeiou]/gi);
                    var vocales = nombre.match(/[aeiou]/gi) || nombre.match(/[AEIOU]/gi);
                    var numVocales = vocales ? vocales.length : 0;

                    // Multiplicar el numero de vocales de cada conductor.nombre por 1.5
                    ss = numVocales * 1.5;

                    var ssTwo = [
                        {
                            ss: ss,
                            conductor: conductores[j].nombre
                        }
                    ]

                    // separar ss de cada conductor.nombre y agregarlo a ssStreetPar
                    ssStreetPar.push(ssTwo);
                }

                // imprimir en consola el arreglo de ssStreetPar
                console.log(ssStreetPar);
            }
        }

        // console.log(streetPar); // Imprime en consola el arreglo de direcciones.street par
        // console.log(ssStreetPar); // Imprime en consola el arreglo de ss cuando direcciones.street es par


        /* NO SIRVEN */
        // Agrega ss a setSsStreetPar
        //setSsStreetPar(ssStreetPar => [...ssStreetPar, ss += 1.5]);
    };

    // Modo oscuro ó claro
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <SafeAreaView style={[styles.safeAreaView, themeContainerStyle]}>
            <TopNavigation style={[themeContainerStyle]} title={evaProps => <Text {...evaProps} style={[themeTextStyle]}>Asignación de SS</Text>} alignment='center' accessoryLeft={goBackAction} />
            <Divider />

            <Layout style={[styles.layout, themeContainerStyle]}>
                <Text style={[themeTextStyle]} category='h1'>Perfil del usuario</Text>
                <Button style={styles.button} onPress={limpiarListas}>Limpiar listas</Button>
                <Button style={styles.button} onPress={calcularSSNombreCalle}>Calcular SS</Button>
            </Layout>

            <StatusBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lightContainer: {
        backgroundColor: '#FFFFFF'
    },
    darkContainer: {
        backgroundColor: '#242c40'
    },
    lightThemeText: {
        color: '#242c40'
    },
    darkThemeText: {
        color: '#FFFFFF'
    }
});


/* <-- Constants --> */
const conductores = [
    { id: 1, nombre: 'James Lewis' },
    { id: 2, nombre: 'Paul Gutierrez' },
    { id: 3, nombre: 'Jack Brown' },
    { id: 4, nombre: 'Amy Jones' },
    { id: 5, nombre: 'Linda Henderson' },
    { id: 6, nombre: 'Mitchell Huynh' },
    { id: 7, nombre: 'Jacqueline Sandoval' },
    { id: 8, nombre: 'Brandon Marshall' },
    { id: 9, nombre: 'Albert Smith' },
    { id: 10, nombre: 'Abigail Castillo DDS' }
];

const direcciones = [
    {
        id: 1,
        street: '4889 Yorkie Lane',
        city: 'Climax',
        stateProvinceArea: 'Michigan',
        phoneNumber: '912-871-4199',
        zipCode: '49034'
    },
    {
        id: 2,
        street: '492 Skips Lane',
        city: 'Casa',
        stateProvinceArea: 'Arkansas',
        phoneNumber: '928-530-8895',
        zipCode: '72025'
    },
    {
        id: 3,
        street: '1596 Cantebury Drive',
        city: 'Mineola',
        stateProvinceArea: 'New York',
        phoneNumber: '646-584-5030',
        zipCode: '11501'
    },
    {
        id: 4,
        street: '4313 Michael Street',
        city: 'Houston',
        stateProvinceArea: 'Texas',
        phoneNumber: '713-800-4735',
        zipCode: '77002'
    },
    {
        id: 5,
        street: '2928 Deer Haven Drive',
        city: 'Sterling',
        stateProvinceArea: 'Michigan',
        phoneNumber: '864-314-4183',
        zipCode: '48659'
    },
    {
        id: 6,
        street: '4787 Strother Street',
        city: 'Birmingham',
        stateProvinceArea: 'Alabama',
        phoneNumber: '205-585-5085',
        zipCode: '35203'
    },
    {
        id: 7,
        street: '3102 Hillhaven Drive',
        city: 'Los Angeles',
        stateProvinceArea: 'California',
        phoneNumber: '323-921-8567',
        zipCode: '90071'
    },
    {
        id: 8,
        street: '1151 Sampson Street',
        city: 'Denver',
        stateProvinceArea: 'Colorado',
        phoneNumber: '303-615-4879',
        zipCode: '80202'
    },
];
