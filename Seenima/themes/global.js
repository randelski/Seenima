import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from './fonts'
import { colors } from './color';
import { color } from 'react-native-elements/dist/helpers';


const { width, height } = Dimensions.get("screen");

export const globalStyles = StyleSheet.create({
    // CONTAINER----------------------------------------------------------------------------------------------------------------------------------------------------------------
    background: {
        backgroundColor: colors.bg.primary,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    scheduleContainer: {

        backgroundColor: colors.bg.secondary,
        padding: 15,
        marginTop: 20,
        marginHorizontal: 20,
        height: 80,
        width: 300
    },

    timeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg.secondary,
        marginTop: 100
    },
    synopsisContainer: {

        marginTop: 30,

    },
    paymentContainer: {

        marginTop: 30,
        alignItems: 'center',

    },
    paymentsContainer: {

        height: 300,
        marginBottom: 30
    },
    availableshowingContainer: {
        marginTop: 30,
        height: 350,

        marginBottom: 30
    },
    profileContainer: {
        marginTop: 30,
        flexWrap: 'wrap',
        marginBottom: 30,
    },
    detailsContainer: {
        position: 'relative',
        paddingHorizontal: 20,

    },

    payList: {

        flex: 1,
        backgroundColor: colors.bg.light,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    postercontainer: {
        position: 'absolute',
        marginLeft: 220,
        marginTop: 150,
        paddingRight: 5,
    },
    cardContainer: {
        backgroundColor: '#0E1C40',
        borderColor: '#0E1C40',

    },
    contentContainer: {
        position: 'relative',
        marginTop: 100,
        marginHorizontal: 20,
    },

    textInputcontainer: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    textInputcontainer2: {
        height: 90,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },

    // TEXT---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    header: {
        fontFamily: fonts.family.headertitle,
        fontSize: fonts.sizes.h5,
        color: colors.text.primary,
        padding: 7,
        marginLeft: 7,
    },
    header2: {
        fontFamily: fonts.family.heading,
        fontSize: fonts.sizes.title,
        color: colors.text.primary,
        padding: 7,
        marginLeft: 7,
    },
    headerContent: {
        fontFamily: fonts.family.heading,
        fontSize: fonts.sizes.caption,
        color: colors.text.secondary,
        bottom: 10,
        padding: 10,
        marginLeft: 7,
    },
    mainTitle: {
        fontFamily: fonts.family.heading,
        fontSize: fonts.sizes.h5,
        color: colors.text.primary,
        padding: 10,
        marginLeft: 7,
    },
    titletext: {
        fontFamily: fonts.family.headertitle,
        color: colors.text.primary,
        fontSize: fonts.sizes.body,
        paddingTop: 5,
    },
    datetext: {
        color: colors.text.secondary,
        marginTop: 5,
        fontSize: fonts.sizes.caption,
        fontFamily: fonts.family.monospace,
    },
    slotstext: {
        color: colors.text.secondary,
        marginTop: 5,
        fontSize: fonts.sizes.caption,
        fontFamily: fonts.family.monospace,
    },
    timetext: {
        fontFamily: fonts.family.heading,
        fontSize: fonts.sizes.h2,
        color: colors.text.primary,
    },
    datetimetext: {
        fontFamily: fonts.family.heading,
        fontSize: fonts.sizes.h4,
        color: colors.text.secondary,
    },

    posterTitle: {
        fontFamily: fonts.family.headertitle,
        fontSize: fonts.sizes.title,
        color: colors.text.primary,

    },
    posterSubtitle: {
        flexWrap: 'wrap',
        flex: 1,
        fontFamily: fonts.family.heading,
        color: colors.text.secondary,
        paddingVertical: 15,

    },
    detailHeadertext: {
        fontFamily: fonts.family.heading,
        fontSize: fonts.sizes.body,
        color: colors.text.primary,
        marginLeft: 10,
        marginTop: 10
    },
    detailContenttext: {
        fontFamily: fonts.family.heading,
        fontSize: fonts.sizes.caption,
        color: colors.text.secondary,
        marginLeft: 10,
        marginTop: 10
    },
    card: {
        bottom: 10,
        backgroundColor: '#1F2F55',
        borderColor: '#1F2F55',
    },
    DateHallTimeText: {
        fontFamily: fonts.family.heading,
        color: 'white',
        fontSize: fonts.sizes.caption,

    },
    availableSeatsText: {
        fontFamily: fonts.family.heading,
        color: '#22FF2B',
        fontSize: fonts.sizes.caption,
        marginTop: 10,
    },
    Logotitle: {
        fontFamily: fonts.family.headertitle,
        color: colors.text.primary,
        fontSize: fonts.sizes.h2,
    },
    subHeadertitle: {
        fontFamily: fonts.family.heading,
        color: colors.primaryGradient.tertiary,
        fontSize: fonts.sizes.body,
    },
    contenttext: {
        fontFamily: fonts.family.heading,
        fontSize: fonts.sizes.caption,
        color: colors.text.secondary,
    },
    headerinputtitle: {
        fontFamily: fonts.family.heading,
        fontSize: fonts.sizes.caption,
        color: colors.text.secondary,
        paddingLeft: 15,
    },
    contactUstext: {
        fontFamily: fonts.family.headertitle,
        fontSize: fonts.sizes.h3,
    },
    //IMAGES SIZES----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    itemPhoto: {
        resizeMode: 'cover',
        width: 200,
        height: 250,
    },
    itemPhotoBackground: {
        resizeMode: "contain",
        width,
        height: 350,
        position: 'relative',
    },
    posterPhoto: {
        resizeMode: 'cover',
        width: 180,
        height: 230,
        position: 'absolute',
        marginLeft: 25,
        marginTop: 100,
    },
    profilePhoto: {
        resizeMode: 'cover',
        width: 200,
        height: 250,

    },

    payment: {
        padding: 20,
        width,
        backgroundColor: colors.bg.secondary,
        position: 'absolute',
        bottom: 0,


    },


    seatIsAvailable: {
        width: 30, height: 30, borderColor: colors.bg.secondary, borderWidth: 1,
        backgroundColor: colors.bg.secondary, color: 'white', justifyContent: 'center'
    },

    seatIsSelected: {
        width: 30, height: 30, borderColor: colors.bg.secondary, borderWidth: 1,
        backgroundColor: colors.bg.secondary
    },

    seatIsReserved: {
        width: 30, height: 30, borderColor: "black", borderWidth: 1,
        backgroundColor: colors.text.error
    }




});