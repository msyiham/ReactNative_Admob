import { StyleSheet, Dimensions, View, Text, ScrollView, useWindowDimensions } from 'react-native'
import React, {useEffect, useState} from 'react'
import theme from '../../../font'
import { BannerAd, TestIds } from '@react-native-admob/admob'
const Container = ({ children }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    // State untuk menyimpan nilai unitId dari npoint atau TestIds jika data dari npoint kosong
    const [bannerAdsUnitId, setBannerAdsUnitId] = useState(TestIds.BANNER);

    useEffect(() => {
        // Fungsi untuk mengambil data dari npoint
        const fetchDataFromNpoint = async () => {
            try {
                const response = await fetch("https://api.npoint.io/0230a9f615b373729fae");
                const data = await response.json();
                const bannerAdsUnitIdFromNpoint = data.Ads.bannerAds;

                // Periksa apakah nilai dari npoint tidak kosong
                if (bannerAdsUnitIdFromNpoint) {
                    setBannerAdsUnitId(bannerAdsUnitIdFromNpoint);
                    console.log(bannerAdsUnitId)
                }
            } catch (error) {
                console.error('Error fetching data from npoint:', error);
            }
        };

        // Panggil fungsi fetchDataFromNpoint saat komponen dimount
        fetchDataFromNpoint();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <View style={[styles.topBar, { height: windowHeight * 0.08, width: windowWidth, justifyContent: 'center', marginBottom: windowHeight * 0.03 }]}>
                <Text style={[theme.fontTitle, { color: 'white', textAlign: 'center' }]}>JUDUL APK</Text>
            </View>
            <View style={{ flex: 1 }}>
                {children}
            </View>
            <View style={{ height: windowHeight * 0.08 }}>
                {/* Gunakan nilai unitId yang telah diambil dari npoint atau TestIds jika data dari npoint kosong */}
                <BannerAd size={'FULL_BANNER'} unitId={bannerAdsUnitId} />
            </View>
        </View>
    )
}

export default Container

const styles = StyleSheet.create({
    topBar:
    {
        backgroundColor: '#277BC0',
    }
})