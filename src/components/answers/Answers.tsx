import { Box } from '@mui/material';
import React from 'react'
import Header from '../Header';
import SingleSelect from '../single-select/SingleSelect';
import CardComponent from '../CardComponent';

const Answers = () => {
  return (
    <Box  m="20px" height="auto">
        <Box display="flex" flexDirection={'row'} justifyContent="space-between" alignItems="center" >
            <Header
            title="Answers"
            subtitle={`Answers for the Questionnarie`}
            />
            <SingleSelect labelInput='Coin' items={['Ripple', 'Bitcoin']}/>
        </Box>
        <Box sx={{display: 'flex', flexDirection:'column', gap: '20px'}}>
            <Box width={'100%'} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px'}}>
                <CardComponent
                        title="Descriptive Analysis"
                        subtitle="31 Dec 2023"
                        content="Lorem Ipsum is simply dummy text of the printing and..."
                        imageUrl="/ripple_xrp-wallpaper.jpg"
                />
                <CardComponent
                        title="Price Trends"
                        subtitle="31 Dec 2023"
                        content="Lorem Ipsum is simply dummy text of the printing and..."
                        imageUrl="/bchain-wp-img1.jpg"
                />
            
            </Box>
            <Box width={'100%'} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px'}}>
                <CardComponent
                        title="RSI Values"
                        subtitle="31 Dec 2023"
                        content="Lorem Ipsum is simply dummy text of the printing and..."
                        imageUrl="/trade-wallpaper.jpg"
                />
                <CardComponent
                        title="Monthly Comparisons"
                        subtitle="31 Dec 2023"
                        content="Lorem Ipsum is simply dummy text of the printing and..."
                        imageUrl="/trade-wallpaper2.jpg"
                />
           
            </Box>
            <Box width={'100%'} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px'}}>
                <CardComponent
                        title="Important Correlations"
                        subtitle="31 Dec 2023"
                        content="Lorem Ipsum is simply dummy text of the printing and..."
                        imageUrl="/trade-wallpaper3.jpg"
                />
                <CardComponent
                        title="Predictions"
                        subtitle="31 Dec 2023"
                        content="Lorem Ipsum is simply dummy text of the printing and..."
                        imageUrl="/trade-wallpaper4.jpg"
                />
           
            </Box>
        </Box>
        
       
    </Box>
  )
}

export default Answers;