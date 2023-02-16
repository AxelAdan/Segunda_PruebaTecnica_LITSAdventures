import React, { useState, useEffect } from 'react';
import { useColorScheme, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TopNavigation, TopNavigationAction, Icon, Divider, Layout, Card, Text } from '@ui-kitten/components';

export const AsignacionSSScreen = ({ navigation }) => {
    /* <-- Icon --> */
    const goBackIcon = (props) => <Icon {...props} name='arrow-left-outline' fill='#797D7F' />; // Icono de boton de regresar

    /* <-- Hooks --> */
    /*
    * Los siguientes 2 “Hooks” se representan como una lista.
    * Esto, suponiendo que podría almacenar datos del consumo de una API
    * (por ello, el segundo elemento de los Hooks [set…] nunca es utilizado)
    */
    const [direcciones, setDirecciones] = useState([ // Lista de direcciones
        { id: 1, street: '4889 Yorkie Lane', city: 'Climax', stateProvinceArea: 'Michigan', phoneNumber: '912-871-4199', zipCode: '49034' },
        { id: 2, street: '492 Skips Lane', city: 'Casa', stateProvinceArea: 'Arkansas', phoneNumber: '928-530-8895', zipCode: '72025' },
        { id: 3, street: '1596 Cantebury Drive', city: 'Mineola', stateProvinceArea: 'New York', phoneNumber: '646-584-5030', zipCode: '11501' },
        { id: 4, street: '4313 Michael Street', city: 'Houston', stateProvinceArea: 'Texas', phoneNumber: '713-800-4735', zipCode: '77002' },
        { id: 5, street: '4622 Oliver Street', city: 'Plano', stateProvinceArea: 'Texas', phoneNumber: '817-363-6314', zipCode: '75074' },
        { id: 6, street: '195 Hamilton Drive', city: 'Port Arthur', stateProvinceArea: 'Texas', phoneNumber: '409-989-0696', zipCode: '77640' },
        { id: 7, street: '2928 Deer Haven Drive', city: 'Sterling', stateProvinceArea: 'Michigan', phoneNumber: '864-314-4183', zipCode: '48659' },
        { id: 8, street: '4787 Strother Street', city: 'Birmingham', stateProvinceArea: 'Alabama', phoneNumber: '205-585-5085', zipCode: '35203' },
        { id: 9, street: '3102 Hillhaven Drive', city: 'Los Angeles', stateProvinceArea: 'California', phoneNumber: '323-921-8567', zipCode: '90071' },
        { id: 10, street: '1151 Sampson Street', city: 'Denver', stateProvinceArea: 'Colorado', phoneNumber: '303-615-4879', zipCode: '80202' }
    ]);

    const [conductores, setConductores] = useState([ // Lista de conductores
        { id: 1, nombre: 'James Lewis', numVocales: 0, ss: 0, direccion: '' },
        { id: 2, nombre: 'Paul Gutierrez', numVocales: 0, ss: 0, direccion: '' },
        { id: 3, nombre: 'Jack Brown', numVocales: 0, ss: 0, direccion: '' },
        { id: 4, nombre: 'Amy Jones', numVocales: 0, ss: 0, direccion: '' },
        { id: 5, nombre: 'Linda Henderson', numVocales: 0, ss: 0, direccion: '' },
        { id: 6, nombre: 'Mitchell Huynh', numVocales: 0, ss: 0, direccion: '' },
        { id: 7, nombre: 'Jacqueline Sandoval', numVocales: 0, ss: 0, direccion: '' },
        { id: 8, nombre: 'Brandon Marshall', numVocales: 0, ss: 0, direccion: '' },
        { id: 9, nombre: 'Albert Smith', numVocales: 0, ss: 0, direccion: '' },
        { id: 10, nombre: 'Abigail Castillo DDS', numVocales: 0, ss: 0, direccion: '' }
    ]);

    /* <-- Functions --> */
    // Regresa a la pantalla de bienvenida
    const navigateBack = () => {
        navigation.goBack();
    };

    const goBackAction = () => <TopNavigationAction icon={goBackIcon} onPress={navigateBack} />;

    // Asigna una dirección a cada conductor
    const assignaDireccion = () => {
        // Recorre direcciones.street
        for (let i = 0; i < direcciones.length; i++) {
            // Si la longitud de dirección.street es par
            if (direcciones[i].street.length % 2 === 0) {
                // Recorre conductores.nombre
                for (let j = 0; j < conductores.length; j++) {
                    // Si la longitud de conductores.nombre contiene alguna vocal (a, e, i, o, u, A, E, I, O, U)
                    if (conductores[j].nombre.includes('a') || conductores[j].nombre.includes('e') || conductores[j].nombre.includes('i') || conductores[j].nombre.includes('o') || conductores[j].nombre.includes('u') || conductores[j].nombre.includes('A') || conductores[j].nombre.includes('E') || conductores[j].nombre.includes('I') || conductores[j].nombre.includes('O') || conductores[j].nombre.includes('U')) {
                        // Cambia el valor de conductores.numVocales por el número de vocales que contiene conductores.nombre
                        conductores[j].numVocales = conductores[j].nombre.match(/[aeiou]/gi || /[AEIOU]/gi).length;
                    }
                }

                // Cambia el valor conductores.direccion por el valor de direcciones.street en la posición i
                conductores[i].direccion = direcciones[i].street;
                // console.log(ss); // Imprime el valor de ss

                // Multiplica el valor conductores.numVocales por 1.5 y lo asigna (cambia el valor) a conductores.ss
                conductores[i].ss = conductores[i].numVocales * 1.5;
                // console.log(conductores); // Imprime la lista de conductores con sus respectivas direcciones y ss
            } else { // Si la longitud de dirección.street es impar
                // Recorre conductores.nombre
                for (let j = 0; j < conductores.length; j++) {
                    // Si la longitud de conductores.nombre contiene alguna vocal (a, e, i, o, u, A, E, I, O, U)
                    if (conductores[j].nombre.includes('a') || conductores[j].nombre.includes('e') || conductores[j].nombre.includes('i') || conductores[j].nombre.includes('o') || conductores[j].nombre.includes('u') || conductores[j].nombre.includes('A') || conductores[j].nombre.includes('E') || conductores[j].nombre.includes('I') || conductores[j].nombre.includes('O') || conductores[j].nombre.includes('U')) {
                        // Cambia el valor de conductores.numVocales por el número de vocales que contiene conductores.nombre
                        conductores[j].numVocales = conductores[j].nombre.match(/[aeiou]/gi || /[AEIOU]/gi).length;
                    }
                }

                // Cambia el valor conductores.direccion por el valor de direcciones.street en la posición i
                conductores[i].direccion = direcciones[i].street;
                // console.log(ss); // Imprime el valor de ss

                // Multiplica el valor conductores.numVocales por 1 y lo asigna (cambia el valor) a conductores.ss
                conductores[i].ss = conductores[i].numVocales * 1;
                // console.log(conductores); // Imprime la lista de conductores con sus respectivas direcciones y ss
            }

            // Si la longitud de dirección.street comparte algún factor común (además de uno) con conductores.nombre
            if (direcciones[i].street.length % conductores[i].nombre.length === 0) {
                // Recorre conductores.nombre
                for (let j = 0; j < conductores.length; j++) {
                    // Incrementa 50% el valor de cada conductores.ss
                    conductores[j].ss = conductores[j].ss * 1.5;
                }

                // console.log(conductores); // Imprime la lista de conductores con sus respectivas direcciones y ss
            }
        }

        // Ordena los conductores por ss de mayor a menor
        conductores.sort((a, b) => b.ss - a.ss);
        // console.log(conductores); // Imprime la lista de conductores con sus respectivas direcciones y ss
    };

    /* <-- Render --> */
    // Renderiza el FlatList
    const renderQuery = ({ item }) => (
        <Layout style={[styles.layout, themeContainerStyle]}>
            <Card style={[styles.CardSS, themeContainerStyle]}>
                <Text style={[styles.textCard, themeTextStyle]}>SS: {item.ss}</Text>
                <Text style={[styles.textCard, themeTextStyle]}>Conductor/a: {item.nombre}</Text>
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
        assignaDireccion();
    }, []);

    return (
        <SafeAreaView style={[styles.safeAreaView, themeContainerStyle]}>
            <TopNavigation style={[themeContainerStyle]} title={evaProps => <Text {...evaProps} style={[themeTextStyle]}>Asignación de SS</Text>} alignment='center' accessoryLeft={goBackAction} />
            <Divider />

            <Card style={[styles.CardTotalButtom, themeContainerStyle]}>
                <Text style={[styles.text, themeTextStyle]}>Puntuación básica de idoneidad (SS)</Text>
            </Card>

            <FlatList keyExtractor={item => item.id} data={conductores} renderItem={renderQuery} initialNumToRender={5} maxToRenderPerBatch={2} windowSize={10} />

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
