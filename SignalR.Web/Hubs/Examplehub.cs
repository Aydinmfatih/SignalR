using Microsoft.AspNetCore.SignalR;

namespace SignalR.Web.Hubs
{
    public class Examplehub:Hub
    {
        public async Task BroadCastMessageToAllClient(string message)
        {
            await Clients.All.SendAsync("RecieveMessageForAllClient",message);
        }
    }
}
