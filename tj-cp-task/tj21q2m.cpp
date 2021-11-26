class Solution {
public:
    int countPrimes(int n) {
        int arr[n+1];
        memset(arr,0,sizeof(arr));
        int i,j;
        int ans=0;
        for(i=2;i*i<=n;i++)
        {
            if(arr[i]==0)
            {
                for(j=i*i;j<=n;j=j+i)
                {
                    arr[j] = 1;
                }
            }
        }
        for(i=2;i<n;i++)
        {
            if(arr[i]==0)
            {
                ans++;
            }
        }
        return ans;
    }
};