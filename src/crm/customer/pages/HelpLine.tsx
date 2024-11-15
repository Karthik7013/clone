import { Avatar, Badge, Box, Button, Card, Chip, Divider, Grid, InputAdornment, ListItem, ListItemAvatar, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
const HelpLine = () => {
  const que_ans = [
    {
      que: 'Is there any free trial available?',
      ans: "Yes, You can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running."
    },
    {
      que: 'Can I change my plan later?',
      ans: 'Of course yes! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.'
    },
    {
      que: 'How does billing work?',
      ans: 'Plans are per workspace, not per account. You can upgrade one workspace and still have any number of free workspaces.'
    },
    {
      que: 'What is your cancellation policy?',
      ans: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid."
    },
    {
      que: 'What payment methods do you accept?',
      ans: "We accept all major credit cards, PayPal, and bank transfers. If you prefer another payment method, contact our support team for assistance."
    },
    {
      que: 'Can I upgrade or downgrade my plan anytime?',
      ans: "Yes, you can upgrade or downgrade your plan at any time. We offer flexibility to match your growing business needs."
    },
    {
      que: 'Is there an enterprise plan available?',
      ans: "Yes, we offer enterprise plans tailored to large organizations with advanced features and dedicated support. Please contact us for more details."
    },
    {
      que: 'Do you provide support for new users?',
      ans: "Absolutely! We offer 24/7 support through chat, email, and a comprehensive help center. Our team is here to assist you at any stage."
    },
    {
      que: 'How secure is my data with your service?',
      ans: "We take security very seriously. Our service complies with industry standards and utilizes encryption and multi-factor authentication to keep your data safe."
    },
    {
      que: 'Can I add multiple users to my account?',
      ans: "Yes, you can add as many users as needed. Different roles and permissions can be assigned to users to control access."
    },
    {
      que: 'Do you offer integrations with other platforms?',
      ans: "Yes, we offer integrations with popular platforms such as Slack, Google Workspace, Trello, and more. Check out our integrations page for a full list."
    },
    {
      que: 'What happens if I reach my usage limits?',
      ans: "If you reach your usage limits, you’ll receive a notification to upgrade your plan. We also offer customizable plans based on your specific needs."
    },
    {
      que: 'Is there a discount for annual plans?',
      ans: "Yes, we offer a discount on our plans if you choose to pay annually. You can save up to 20% compared to the monthly plan."
    },
    {
      que: 'Can I transfer my data to another account?',
      ans: "Yes, you can transfer your data to another account. Please contact our support team for assistance with the data migration process."
    },
    {
      que: 'Do you have a mobile app?',
      ans: "Yes, we have a mobile app available for both iOS and Android. You can download it from the App Store or Google Play."
    },
    {
      que: 'Can I export my data?',
      ans: "Yes, you can export your data anytime in various formats (CSV, Excel, etc.). Just go to the settings page to download your data."
    },
    {
      que: 'Do you provide a refund if I am not satisfied?',
      ans: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the service, we'll refund you within 30 days of purchase."
    },
    {
      que: 'How do I contact customer support?',
      ans: "You can reach our customer support team via live chat, email at support@example.com, or by visiting our help center."
    },
    {
      que: 'Can I customize the features of the service?',
      ans: "Yes, our service is highly customizable. You can tailor many features to fit your specific needs. Contact our support team for customization options."
    }
  ];

  return (
    <Box mt={3}>
      <Typography gutterBottom variant='h4'>Frequently Asked Questions</Typography>
      <Typography gutterBottom variant='caption'>Quick answers to questions to you may have. Can't find what you're looking for? Check out our <Link to="#">full documentation</Link></Typography>
      <Card>
        <Grid container my={3}>
          {que_ans.map((que, _) => <Grid key={_} item xs={12} md={6}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar variant='rounded' alt="Remy Sharp" src="https://avatar.iran.liara.run/public" />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant='subtitle2'>{que.que}</Typography>}
                secondary={
                  <Typography variant='caption' color='text.secondary'>
                    {que.ans}
                  </Typography>
                }
              />
            </ListItem>
          </Grid>)}



        </Grid>
      </Card>
      <Stack alignItems="center" mt={4}>
        <Badge badgeContent={<Chip size="small" color="primary" label="?" />}>
          <Avatar sx={{ mb: 2 }} />
        </Badge>
        <Typography gutterBottom variant='h6' align='center'>Still have Questions?</Typography>
        <Typography color='text.secondary' variant='body2' align='center'>Can't find the answer your looking for? Please chat to our friendly team</Typography>
        <Box mt={2}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            InputProps={{
              // startAdornment: (
              //   <InputAdornment position="start">
              //     <Search />
              //   </InputAdornment>
              // ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant='contained' endIcon={<SendRoundedIcon />}>Send</Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>

    </Box>
  )
}

export default HelpLine