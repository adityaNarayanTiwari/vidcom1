import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const apiUrl = 'http://nfadmin.flickfusion.net/ava/php/vidcom_rn_p.php';

const VidMail = () => {
  const [vidmailList, setVidmailList] = useState([]);

  const fetchVidmailData = async () => {
    const formData = new FormData();
    formData.append('ACTION', 'VIDMAIL_LIST');
    formData.append('USER', 'chatuser5');
    formData.append('ROOFTOP_KEY', '0CDDE61B-E251-EB1E-137D-426388FB1D03');
    formData.append('APP_VERSION', '5.0.0');
    formData.append('PAGE', 1);
    formData.append('TYPE', 'iOS');
    formData.append('TOKEN', 'pIDux2d8dTiKpkFxcwPMV53zwoHpTmVjaswlpNZ7sw0=');

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const jsonData = await response.json();
      console.log(jsonData.data.result)
      setVidmailList(jsonData.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  

  useEffect(() => {
    fetchVidmailData();
  }, []);

  return (
    <FlatList
      data={vidmailList}
      renderItem={({ item }) => (
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.email_data.emailto}</Text>
        </View>
      )}
      // keyExtractor={item => item.id.toString()}
    />
  );
};

export default VidMail;
