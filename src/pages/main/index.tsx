import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import theme from '../../../font'
import Container from '../../components/container';
import Card from '../../components/card';
import CustomIcon from '../../components/icon';
import { TestIds, useRewardedInterstitialAd } from '@react-native-admob/admob';

const Main = ({ navigation }) => {
    const [menu, setMenu] = useState([]);
    const [menuBottom, setMenuBottom] = useState([]);
    const [disclaimer, setDisclaimer] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [warnaBackground, setWarnaBackground] = useState('crimson');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 'https://api.npoint.io/0230a9f615b373729fae';

                const response = await axios.get(apiUrl);
                const data = response.data;

                setMenu(data.Menu);
                setMenuBottom(data.MenuBottom);
                setDisclaimer(data.Disclaimer);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // State untuk menyimpan nilai unitId dari npoint atau TestIds.REWARDED_INTERSTITIAL
    const [rewardedInterstitialAdUnitId, setRewardedInterstitialAdUnitId] = useState(TestIds.REWARDED_INTERSTITIAL);

    useEffect(() => {
        // Fungsi untuk mengambil data dari npoint
        const fetchDataFromNpoint = async () => {
            try {
                const response = await fetch("https://api.npoint.io/0230a9f615b373729fae");
                const data = await response.json();
                const rewardedInterstitialAdUnitIdFromNpoint = data.Ads.rewardedInterstitialAd;

                // Periksa apakah nilai dari npoint tidak kosong
                if (rewardedInterstitialAdUnitIdFromNpoint) {
                    setRewardedInterstitialAdUnitId(rewardedInterstitialAdUnitIdFromNpoint);
                    console.log(rewardedInterstitialAdUnitId)
                }
            } catch (error) {
                console.error('Error fetching data from npoint:', error);
            }
        };

        // Panggil fungsi fetchDataFromNpoint saat komponen dimount
        fetchDataFromNpoint();
    }, []);

    const {
        adLoaded,
        adDismissed,
        reward,
        show,
        adLoadError,
        load
    } = useRewardedInterstitialAd(rewardedInterstitialAdUnitId, {
        requestOptions: {
            requestNonPersonalizedAdsOnly: true,
        },
    });

    useEffect(() => {
        load();
        if (adDismissed) {
            load();
            setWarnaBackground('blue');
        }
    }, [adDismissed]);

    function lihatIklan() {
        if (adLoaded) {
            show();
        } else {
            load();
            console.log('ad not loaded');
        }
    }

    const handleMenuPress = (item) => {
        setSelectedMenu(item);
        lihatIklan();
        navigation.navigate(item.title, { menuData: item });
    };

    const menuBottomPressed = (item) => {
        setSelectedMenu(item);
        lihatIklan();
        navigation.navigate('News Detail', { menuData: item });
    };

    const newsPressed = (item) => {
        lihatIklan();
        navigation.navigate(item);
    };

    return (
        <Container>
            <ScrollView>
                <Card cardHeight={0.25} cardWidth={0.9} onPress={() => newsPressed('News')}>
                    <CustomIcon name={"newspaper"} />
                    <Text style={theme.fontBold}>News</Text>
                </Card>
                <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {menu.map((item, index) => (
                        <Card key={index} cardHeight={0.25} cardWidth={0.44} onPress={() => handleMenuPress(item)}>
                            <CustomIcon name={item.iconName} />
                            <Text style={theme.fontBold}>{item.title}</Text>
                        </Card>
                    ))}
                    {menuBottom.map((item, index) => (
                        <Card key={index} cardHeight={0.25} cardWidth={0.44} onPress={() => menuBottomPressed(item)}>
                            <CustomIcon name={item.iconName} />
                            <Text style={theme.fontBold}>{item.title}</Text>
                        </Card>
                    ))}
                </View>
                <View style={{ marginBottom: 20, padding:20 }}>
                    <Text style={theme.font}>
                        <Text style={{ fontWeight: 'bold' }}>Disclaimer :</Text> {disclaimer.text}
                    </Text>
                </View>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    // Styles here
});

export default Main;
