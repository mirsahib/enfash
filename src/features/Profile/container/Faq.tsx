import {View} from 'react-native';
import React from 'react';
import {List, Text, useTheme} from 'react-native-paper';
import Layout from '@hoc/Layout';

const Faq = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        margin: '5%',
        paddingTop: '5%',
        paddingHorizontal: '5%',
      }}>
      <List.AccordionGroup>
        <List.Accordion
          style={{
            borderWidth: 1,
            borderColor: theme.colors.primaryContainer,
            marginTop: 10,
          }}
          titleStyle={{fontWeight: 'bold',fontSize:14 }}
          title="Q: How do I place an order on the app?"
          titleNumberOfLines={2}
          id="1">
          <List.Item
            style={{
              borderWidth: 1,
              borderColor: theme.colors.primaryContainer,
            }}
            titleNumberOfLines={20}
            title="A: To place an order, add items to your cart, review your cart, and then select a payment method and shipping address. Confirm your order and it will be processed for delivery."
          />
        </List.Accordion>
        <List.Accordion
          style={{
            borderWidth: 1,
            borderColor: theme.colors.primaryContainer,
            marginTop: 10,
          }}
          titleStyle={{fontWeight: 'bold',fontSize:14}}
          title="Q: How do I track my order?"
          id="2">
          <List.Item
            style={{
              borderWidth: 1,
              borderColor: theme.colors.primaryContainer,
            }}
            title="A: You can track your order in the 'Orders' section of the app or website. You will also receive updates via email or push notifications.          "
            titleNumberOfLines={20}
          />
        </List.Accordion>
        <List.Accordion
          style={{
            borderWidth: 1,
            borderColor: theme.colors.primaryContainer,
            marginTop: 10,
          }}
          titleStyle={{fontWeight: 'bold',fontSize:14}}
          title="Q: How do I return an item?"
          id="3">
          <List.Item
            style={{
              borderWidth: 1,
              borderColor: theme.colors.primaryContainer,
            }}
            titleNumberOfLines={20}
            title="A: You can initiate a return by going to the 'Orders' section of the app or website and selecting the item you wish to return. Follow the prompts to process the return.            "
          />
        </List.Accordion>
        <List.Accordion
          style={{
            borderWidth: 1,
            borderColor: theme.colors.primaryContainer,
            marginTop: 10,
          }}
          titleStyle={{fontWeight: 'bold',fontSize:14}}
          title="Q: How do I track my order?"
          id="4">
          <List.Item
            style={{
              borderWidth: 1,
              borderColor: theme.colors.primaryContainer,
            }}
            titleNumberOfLines={20}
            title="A: You can cancel an order by going to the 'Orders' section of the app or website and selecting the order you wish to cancel. If the order has already been processed, you may be unable to cancel it."
          />
        </List.Accordion>
        <List.Accordion
          style={{
            borderWidth: 1,
            borderColor: theme.colors.primaryContainer,
            marginTop: 10,
          }}
          titleStyle={{fontWeight: 'bold',fontSize:14}}
          title="Q: How do I contact customer support?"
          titleNumberOfLines={2}
          id="5">
          <List.Item
            style={{
              borderWidth: 1,
              borderColor: theme.colors.primaryContainer,
            }}
            titleNumberOfLines={20}
            title="A: You can contact customer support through the 'Help' section of the app or website, or by reaching out to us through the contact information provided in the app or on the website.            "
          />
        </List.Accordion>
      </List.AccordionGroup>
    </View>
  );
};

export default Layout(Faq);
