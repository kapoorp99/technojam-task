#include<bits/stdc++.h>
using namespace std;
#define gcd(a,b) __gcd((a),(b))
#define lcm(a,b) ((a)*(b))/gcd((a),(b))
#define M 1000000007 
typedef long long int lli; 
#define pb push_back
#define sa(x) sort((x).begin(), (x).end());
#define tc  lli t;cin >> t;while(t--)
#define ffi(x,y) for(lli i=x;i<y;i++)
#define ffj(x,y) for(lli j=x;j<y;j++)
#define frj(x,y) for(lli j=x;j>y;j--)
#define fri(x,y) for(lli i=x;i>y;i--)
bool isPowerof2(int x)
{
  return (x && (!(x & (x - 1))));
}
lli fast_power(lli b, lli n) 
{
    if(n==0)
        return 1;
    if(n==1)
      return b;
    long long halfn=fast_power(b,n/2);
    if(n%2==0)
        return ( halfn * halfn ) % M;
    else
        return (((halfn*halfn)% M)*b)%M;
}
int main() 
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  tc
  { 
   lli n;
   cin>>n;
   cout<<(((fast_power(2,n-1))) + M)%M<<'\n';
  }
return 0;
}
