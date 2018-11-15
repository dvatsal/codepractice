public class DeepestPit{

     public static void main(String []args){
        System.out.println("Hello World");
        HelloWorld.deepestPit({0,1,3,-2,0,1,0,-3,2,3});
     }
     
     static void deepestPit(int []A){
         
         TreeSet<int> depthList = new TreeSet<int>();
         
         for (int P = 0; P < A.length;P++)
         {
             
             
             for(int R = A.length-1; R>P; R--)
             {
                    
                 int Q = R-1;
                 
                 if(A[P]>A[Q] && A[Q]<A[R]){
                     System.out.println("tuplet P,Q,R:-"+P+" "+Q+" "+R);
                     System.out.println("Values of P,Q,R:-"+A[P]+" "+A[Q]+" "+A[R]);
                     System.out.println("Depth->A[P]-A[Q]"+A[P]-A[Q]+"and depth A[R]-A[Q]"+A[R]-A[Q]+" ");
                     depthList.add(Math.min(A[P]-A[Q],A[R]-A[Q]));
                 }
                 
                 
             }
             
         }
         
         System.out.println("highest depth:-"+depthList.last().toString());
         
     }
}