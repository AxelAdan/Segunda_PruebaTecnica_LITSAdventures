import React, { useState, useEffect } from 'react';
import { useColorScheme, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TopNavigation, TopNavigationAction, Icon, Divider, Layout, Card, Text } from '@ui-kitten/components';

/* <-- Listas --> */
var puntuacionBasicaIdoneidad = 0;
var ssConductor = [];

export const AsignacionSSScreen = ({ navigation }) => {
    /* <-- Icons --> */
    // Icono de boton de regresar
    const goBackIcon = (props) => <Icon {...props} name='arrow-left-outline' fill='#797D7F' />;

    /* <-- Hooks --> */
    // Lista de direcciones.street par
    const [streetPar, setStreetPar] = useState([]);
    // Lista de ss cuando direcciones.street es par
    const [ssStreetPar, setSsStreetPar] = useState([]);
    // Lista de ss
    const [ss, setSs] = useState([]);

    /* <-- Functions --> */
    // Regresa a la pantalla de bienvenida
    const navigateBack = () => {
        limpiarPuntuacionBasicaIdoneidad();

        navigation.goBack();
    };

    const goBackAction = () => <TopNavigationAction icon={goBackIcon} onPress={navigateBack} />;

    // Limpia las listas (arrays)
    const limpiarPuntuacionBasicaIdoneidad = () => {
        setStreetPar([]);
        setSsStreetPar([]);
        setSs([]);
    };

    // Función que realiza el algoritmo
    const assifnarDireccion = () => {
        // Recorrer direcciones.street
        for (let i = 0; i < direcciones.length; i++) {
            // Recorrer conductores.nombre
            for (let j = 0; j < conductores.length; j++) {
                // Si la longitud del direcciones.street es par
                if (direcciones[i].street.length % 2 === 0) {
                    // puntuacionBasicaIdoneidad es el número de vocales de conductores.nombre multiplicado por 1,5
                    puntuacionBasicaIdoneidad = (conductores[j].nombre.match(/[aeiou]/gi) || conductores[j].nombre.match(/[AEIOU]/gi)).length * 1.5;

                    // Agrupa los conductores con su puntuación, y asignar una dirección.street
                    ssConductor.push({ id: i, puntuacion: puntuacionBasicaIdoneidad, conductor: conductores[j].nombre, direccion: direcciones[i].street });

                    // console.log(puntuacionBasicaIdoneidad);
                } else {
                    // Si la longitud del direcciones.street es impar
                    if (direcciones[i].street.length % 2 !== 0) {
                        // puntuacionBasicaIdoneidad es el número de consonantes de conductores.nombre multiplicado por 1
                        puntuacionBasicaIdoneidad = (conductores[j].nombre.match(/[bcdfghjklmnpqrstvwxyz]/gi) || conductores[j].nombre.match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi)).length;

                        // console.log(puntuacionBasicaIdoneidad);
                    } else {
                        // Si la longitud direcciones.street comparte algún factor común (además de 1) con conductores.nombre, puntuacionBasicaIdoneidad aumenta en un 50 % por encima puntuacionBasicaIdoneidad base
                        if (direcciones[i].street.length % conductores[j].nombre.length === 0) {
                            puntuacionBasicaIdoneidad = puntuacionBasicaIdoneidad * 1.5;

                            // console.log(puntuacionBasicaIdoneidad);
                        }
                    }

                    ssConductor.push({ id: i, puntuacion: puntuacionBasicaIdoneidad, conductor: conductores[j].nombre, direccion: direcciones[i].street });
                }
            }

            // console.log(ssConductor);
        }

        limpiarPuntuacionBasicaIdoneidad();
    };

    /* <-- Render --> */
    // Renderiza el FlatList
    const renderQuery = ({ item }) => (
        <Layout style={[styles.layout, themeContainerStyle]}>
            <Card style={[styles.CardSS, themeContainerStyle]}>
                <Text style={[styles.textCard, themeTextStyle]}>SS: {item.puntuacion}</Text>
                <Text style={[styles.textCard, themeTextStyle]}>Conductor/a: {item.conductor}</Text>
                <Text style={[styles.textCard, themeTextStyle]}>Dirección: {item.direccion}</Text>
            </Card>
        </Layout>
    );

    // Modo oscuro ó claro
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    /* <-- useEffect --> */
    useEffect(() => {
        assifnarDireccion();
    }, []);

    return (
        <SafeAreaView style={[styles.safeAreaView, themeContainerStyle]}>
            <TopNavigation style={[themeContainerStyle]} title={evaProps => <Text {...evaProps} style={[themeTextStyle]}>Asignación de SS</Text>} alignment='center' accessoryLeft={goBackAction} />
            <Divider />

            <Card style={[styles.CardTotalButtom, themeContainerStyle]}>
                <Text style={[styles.text, themeTextStyle]}>Puntuación básica de idoneidad (SS)</Text>
            </Card>

            <FlatList keyExtractor={item => item.id} data={ssConductor} renderItem={renderQuery} initialNumToRender={5} maxToRenderPerBatch={2} windowSize={10} />

            <StatusBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    CardTotalButtom: {
        flexDirection: 'column',
        marginLeft: 2,
        marginTop: 0,
        marginRight: 2,
        marginBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    CardSS: {
        paddingLeft: 5,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        borderRadius: 50
    },
    text: {
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    textCard: {
        alignSelf: 'center',
        textAlign: 'center'
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    button: {
        marginHorizontal: 30,
        marginBottom: 5,
        borderRadius: 25
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