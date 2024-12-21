// app/api/contact/route.js
export async function POST(req) {
  try {
    const data = await req.json();
    
    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email using your preferred email service
    // 3. Store the message in a database if needed
    
    // For now, we'll just log the data
    console.log('Contact form submission:', data);
    
    // Return success response
    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Return error response
    return new Response(JSON.stringify({ message: 'Error sending message' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
