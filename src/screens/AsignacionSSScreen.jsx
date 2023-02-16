import React, { useState, useEffect } from 'react';
import { useColorScheme, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TopNavigation, TopNavigationAction, Icon, Divider, Layout, Card, Text } from '@ui-kitten/components';

export const AsignacionSSScreen = ({ navigation }) => {
    /* <-- Icons --> */
    // Icono de boton de regresar
    const goBackIcon = (props) => <Icon {...props} name='arrow-left-outline' fill='#797D7F' />;

    /* <-- Hooks --> */
    // Lista de direcciones
    const [direcciones, setDirecciones] = useState([
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

    // Lista de conductores
    const [conductores, setConductores] = useState([
        { id: 1, nombre: 'James Lewis', ss: 0, direccion: '' },
        { id: 2, nombre: 'Paul Gutierrez', ss: 0, direccion: '' },
        { id: 3, nombre: 'Jack Brown', ss: 0, direccion: '' },
        { id: 4, nombre: 'Amy Jones', ss: 0, direccion: '' },
        { id: 5, nombre: 'Linda Henderson', ss: 0, direccion: '' },
        { id: 6, nombre: 'Mitchell Huynh', ss: 0, direccion: '' },
        { id: 7, nombre: 'Jacqueline Sandoval', ss: 0, direccion: '' },
        { id: 8, nombre: 'Brandon Marshall', ss: 0, direccion: '' },
        { id: 9, nombre: 'Albert Smith', ss: 0, direccion: '' },
        { id: 10, nombre: 'Abigail Castillo DDS', ss: 0, direccion: '' }
    ]);

    /* <-- Functions --> */
    // Regresa a la pantalla de bienvenida
    const navigateBack = () => {
        navigation.goBack();
    };

    const goBackAction = () => <TopNavigationAction icon={goBackIcon} onPress={navigateBack} />;

    // Asigna una dirección a cada conductor
    const assignaDireccion = () => {
        /* <-- Variables --> */
        let ss = 0; // Punkuación básica de idoneidad
        let numeroVocales = 0; // Número de vocales en el nombre (Del conductor)

        // Recorre direcciones.street
        for (let i = 0; i < direcciones.length; i++) {
            // Si la longitud de dirección.street es par
            if (direcciones[i].street.length % 2 === 0) {
                // Recorre conductores.nombre
                for (let j = 0; j < conductores.length; j++) {
                    // ss es igual al número de vocales de conductores.nombre * 1.5
                    for (let k = 0; k < conductores[j].nombre.length; k++) {
                        if (conductores[j].nombre[k] === 'a'|| conductores[j].nombre[k] === 'e' || conductores[j].nombre[k] === 'i' || conductores[j].nombre[k] === 'o' || conductores[j].nombre[k] === 'u' || conductores[j].nombre[k] === 'A' || conductores[j].nombre[k] === 'E' || conductores[j].nombre[k] === 'I' || conductores[j].nombre[k] === 'O' || conductores[j].nombre[k] === 'U') {
                            numeroVocales++;

                            ss = numeroVocales * 1.5;
                        }
                    }
                }

                // Cambia el valor conductores.direccion por el valor de direcciones.street en la posición i
                conductores[i].direccion = direcciones[i].street;

                //console.log(ss); // Imprime el valor de ss

                // Cambia el valor de ss en conductores.ss
                conductores[i].ss = ss;
                console.log(conductores); // Imprime la lista de conductores con sus respectivas direcciones y ss
            } else {
                // Recorre conductores.nombre
                for (let j = 0; j < conductores.length; j++) {
                    // ss es igual al número de vocales de conductores.nombre * 1.5
                    for (let k = 0; k < conductores[j].nombre.length; k++) {
                        if (conductores[j].nombre[k] === 'a'|| conductores[j].nombre[k] === 'e' || conductores[j].nombre[k] === 'i' || conductores[j].nombre[k] === 'o' || conductores[j].nombre[k] === 'u' || conductores[j].nombre[k] === 'A' || conductores[j].nombre[k] === 'E' || conductores[j].nombre[k] === 'I' || conductores[j].nombre[k] === 'O' || conductores[j].nombre[k] === 'U') {
                            numeroVocales++;

                            ss = numeroVocales * 1.5;
                        }
                    }
                }

                // Cambia el valor conductores.direccion por el valor de direcciones.street en la posición i
                conductores[i].direccion = direcciones[i].street;

                //console.log(ss); // Imprime el valor de ss

                // Cambia el valor de ss en conductores.ss
                conductores[i].ss = ss;
                console.log(conductores); // Imprime la lista de conductores con sus respectivas direcciones y ss
            }

            // Si la longitud de dirección.street comparte algún factor común (además de uno) con conductores.nombre
            if (direcciones[i].street.length % conductores[i].nombre.length === 0) {
                // Recorre conductores.nombre
                for (let j = 0; j < conductores.length; j++) {
                    // ss es igual al número de vocales de conductores.nombre * 1.5
                    for (let k = 0; k < conductores[j].nombre.length; k++) {
                        if (conductores[j].nombre[k] === 'a'|| conductores[j].nombre[k] === 'e' || conductores[j].nombre[k] === 'i' || conductores[j].nombre[k] === 'o' || conductores[j].nombre[k] === 'u' || conductores[j].nombre[k] === 'A' || conductores[j].nombre[k] === 'E' || conductores[j].nombre[k] === 'I' || conductores[j].nombre[k] === 'O' || conductores[j].nombre[k] === 'U') {
                            numeroVocales++;

                            ss = numeroVocales * 1.5;
                        }
                    }
                }

                // Cambia el valor conductores.direccion por el valor de direcciones.street en la posición i
                conductores[i].direccion = direcciones[i].street;

                //console.log(ss); // Imprime el valor de ss

                // Cambia el valor de ss en conductores.ss
                conductores[i].ss = ss;
                console.log(conductores); // Imprime la lista de conductores con sus respectivas direcciones y ss
            }
        }        
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
