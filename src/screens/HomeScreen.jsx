import React, { useState } from 'react';
import { useColorScheme, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Layout, Text, Icon, Button, Modal, Card } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {
    /* <-- Icons --> */
    // Icono de carro
    const carIcon = (props) => <Icon {...props} name='car-outline' />;

    /* <-- Hooks --> */
    // Mostrar conductores
    const [showConductores, setShowConductores] = useState(false);
    // Mostrar direcciones
    const [showDirecciones, setShowDirecciones] = useState(false);
    

    /* <-- Function --> */
    // Ir al la asignación de SS
    const navigateAsignacionSS = () => navigation.navigate('AsignacionSS');

    // Modo oscuro ó claro
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <SafeAreaView style={[styles.safeAreaView, themeContainerStyle]}>
            <Layout style={[styles.layout, themeContainerStyle]}>
                <Layout style={[styles.layoutTitle, themeContainerStyle]}>
                    <Text category='h1' style={[styles.text, themeTextStyle]}>Bienvenido</Text>
                </Layout>

                <Layout style={[styles.layoutText, themeContainerStyle]}>
                    <Text category='h5' style={[styles.text, themeTextStyle]}>En esta aplicación se asigna una puntuación básica de idoneidad (SS) de acuerdo a los siguientes criterio:</Text>
                </Layout>

                <Layout style={[styles.layoutTextList, themeContainerStyle]}>
                    <Text style={[styles.text, themeTextStyle]}>Si la longitud del nombre de la calle de destino del envío es par, la puntuación básica de idoneidad (SS) es el número de vocales del nombre del conductor multiplicado por 1,5.</Text>
                    <Text style={[styles.text, themeTextStyle]}>Si la longitud del nombre de la calle de destino del envío es impar, la base SS es el número de consonantes en el nombre del conductor multiplicado por 1.</Text>
                    <Text style={[styles.text, themeTextStyle]}> Si la longitud del nombre de la calle de destino del envío comparte algún factor común (además de 1) con la longitud del nombre del conductor, el SS aumenta en un 50 % por encima del SS base.</Text>
                </Layout>

                <Layout style={[styles.listaDatos, themeContainerStyle]}>
                    <Text style={[styles.text, themeTextStyle]}>Véalos aquí los</Text>
                    <TouchableOpacity onPress={() => setShowConductores(true)}>
                        <Text style={[styles.textTap]}> conductores</Text>
                    </TouchableOpacity>
                    
                    <Text style={[styles.text, themeTextStyle]}> y </Text>

                    <TouchableOpacity onPress={() => setShowDirecciones(true)}>
                        <Text style={[styles.textTap]}>direcciones</Text>
                    </TouchableOpacity>
                </Layout>

                <Modal visible={showConductores} backdropStyle={styles.backdrop} onBackdropPress={() => setShowConductores(false)}>
                    <Card disabled={true}>
                        <Text style={[styles.textModal]}>Información de Conductores</Text>

                        <Layout style={[styles.layoutTextListFormat]}>
                            <Text style={[styles.textModalDos]}>Nombres:</Text>
                            <Layout style={[styles.layoutTextListFormat]}>
                                <Text>James Lewis</Text>
                                <Text>Paul Gutierrez</Text>
                                <Text>Jack Brown</Text>
                                <Text>Amy Jones</Text>
                                <Text>Linda Henderson</Text>
                                <Text>Mitchell Huynh</Text>
                                <Text>Jacqueline Sandoval</Text>
                                <Text>Brandon Marshall</Text>
                                <Text>Albert Smith</Text>
                                <Text>Abigail Castillo DDS</Text>
                            </Layout>
                        </Layout>

                        <Button style={[styles.buttonModal]} onPress={() => setShowConductores(false)}>Cerrar</Button>
                    </Card>
                </Modal>

                <Modal visible={showDirecciones} backdropStyle={styles.backdrop} onBackdropPress={() => setShowDirecciones(false)}>
                    <Card disabled={true}>
                        <Text style={[styles.textModal]}>Información de Direcciones</Text>

                        <Layout style={[styles.layoutTextListFormat]}>
                            <Text style={[styles.textModalDos]}>Direcciones</Text>
                            <Layout style={[styles.layoutDirecciones]}>
                                <Text style={[styles.textDireccion]}>Street:
                                    <Text style={[styles.textDireccionDos]}> 4889 Yorkie Lane</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>City:
                                    <Text style={[styles.textDireccionDos]}> Climax</Text>
                                </Text>
                                
                                <Text style={[styles.textDireccion]}>State/province/area:
                                    <Text style={[styles.textDireccionDos]}> Michigan</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Phone number:
                                    <Text style={[styles.textDireccionDos]}> 912-871-4199</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Zip code:
                                    <Text style={[styles.textDireccionDos]}> 49034</Text>
                                </Text>
                            </Layout>

                            <Layout style={[styles.layoutDirecciones]}>
                                <Text style={[styles.textDireccion]}>Street:
                                    <Text style={[styles.textDireccionDos]}> 492 Skips Lane</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>City:
                                    <Text style={[styles.textDireccionDos]}> Casa</Text>
                                </Text>
                                
                                <Text style={[styles.textDireccion]}>State/province/area:
                                    <Text style={[styles.textDireccionDos]}> Arkansas</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Phone number:
                                    <Text style={[styles.textDireccionDos]}> 928-530-8895</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Zip code:
                                    <Text style={[styles.textDireccionDos]}> 72025</Text>
                                </Text>
                            </Layout>

                            <Layout style={[styles.layoutDirecciones]}>
                                <Text style={[styles.textDireccion]}>Street:
                                    <Text style={[styles.textDireccionDos]}> 1596 Cantebury Drive</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>City:
                                    <Text style={[styles.textDireccionDos]}> Mineola</Text>
                                </Text>
                                
                                <Text style={[styles.textDireccion]}>State/province/area:
                                    <Text style={[styles.textDireccionDos]}> Ney York</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Phone number:
                                    <Text style={[styles.textDireccionDos]}> 646-584-5030</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Zip code:
                                    <Text style={[styles.textDireccionDos]}> 11501</Text>
                                </Text>
                            </Layout>

                            <Layout style={[styles.layoutDirecciones]}>
                                <Text style={[styles.textDireccion]}>Street:
                                    <Text style={[styles.textDireccionDos]}> 4313 Michael Street</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>City:
                                    <Text style={[styles.textDireccionDos]}> Houston</Text>
                                </Text>
                                
                                <Text style={[styles.textDireccion]}>State/province/area:
                                    <Text style={[styles.textDireccionDos]}> Texas</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Phone number:
                                    <Text style={[styles.textDireccionDos]}> 13-800-4735</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Zip code:
                                    <Text style={[styles.textDireccionDos]}> 77002</Text>
                                </Text>
                            </Layout>

                            <Layout style={[styles.layoutDirecciones]}>
                                <Text style={[styles.textDireccion]}>Street:
                                    <Text style={[styles.textDireccionDos]}> 2928 Deer Haven Drive</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>City:
                                    <Text style={[styles.textDireccionDos]}> Sterling</Text>
                                </Text>
                                
                                <Text style={[styles.textDireccion]}>State/province/area:
                                    <Text style={[styles.textDireccionDos]}> Michigan</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Phone number:
                                    <Text style={[styles.textDireccionDos]}> 864-314-4183</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Zip code:
                                    <Text style={[styles.textDireccionDos]}> 48659</Text>
                                </Text>
                            </Layout>

                            <Layout style={[styles.layoutDirecciones]}>
                                <Text style={[styles.textDireccion]}>Street:
                                    <Text style={[styles.textDireccionDos]}> 4787 Strother Street</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>City:
                                    <Text style={[styles.textDireccionDos]}> Birmingham</Text>
                                </Text>
                                
                                <Text style={[styles.textDireccion]}>State/province/area:
                                    <Text style={[styles.textDireccionDos]}> Alabama</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Phone number:
                                    <Text style={[styles.textDireccionDos]}> 205-585-5085</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Zip code:
                                    <Text style={[styles.textDireccionDos]}> 35203</Text>
                                </Text>
                            </Layout>

                            <Layout style={[styles.layoutDirecciones]}>
                                <Text style={[styles.textDireccion]}>Street:
                                    <Text style={[styles.textDireccionDos]}> 3102 Hillhaven Drive</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>City:
                                    <Text style={[styles.textDireccionDos]}> Los Angeles</Text>
                                </Text>
                                
                                <Text style={[styles.textDireccion]}>State/province/area:
                                    <Text style={[styles.textDireccionDos]}> California</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Phone number:
                                    <Text style={[styles.textDireccionDos]}> 323-921-8567</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Zip code:
                                    <Text style={[styles.textDireccionDos]}> 90071</Text>
                                </Text>
                            </Layout>

                            <Layout style={[styles.layoutDirecciones]}>
                                <Text style={[styles.textDireccion]}>Street:
                                    <Text style={[styles.textDireccionDos]}> 1151 Sampson Street</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>City:
                                    <Text style={[styles.textDireccionDos]}> Denver</Text>
                                </Text>
                                
                                <Text style={[styles.textDireccion]}>State/province/area:
                                    <Text style={[styles.textDireccionDos]}> Colorado</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Phone number:
                                    <Text style={[styles.textDireccionDos]}> 303-615-4879</Text>
                                </Text>

                                <Text style={[styles.textDireccion]}>Zip code:
                                    <Text style={[styles.textDireccionDos]}> 80202</Text>
                                </Text>
                            </Layout>
                        </Layout>

                        <Button style={[styles.buttonModal]} onPress={() => setShowDirecciones(false)}>Cerrar</Button>
                    </Card>
                </Modal>

                <Button style={[styles.button]} accessoryLeft={carIcon} onPress={navigateAsignacionSS}>Asignar SS</Button>
            </Layout>

            <StatusBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    layoutTitle: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },
    layoutText: {
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        textAlign: 'justify',
        flexDirection: 'row',
        marginBottom: 15
    },
    layoutTextList: {
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'justify',
        marginHorizontal: 50
    },
    layoutTextListFormat: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    listaDatos: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 12
    },
    text: {
        marginBottom: 20
    },
    textTap: {
        textDecorationLine: 'underline',
        color: '#1D4ED8',
        marginBottom: 20
    },
    layoutDirecciones: {
        flexDirection: 'column',
        marginBottom: 20
    },
    textDireccion: {
        fontWeight: 'bold',
        fontSize: 8,
    },
    textDireccionDos: {
        fontSize: 8,
    },
    button: {
        borderRadius: 100
    },
    textModal: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    textModalDos: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    buttonModal: {
        borderRadius: 100,
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 80
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    icon: {
        width: 40,
        height: 40,
        alignSelf: 'center'
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
